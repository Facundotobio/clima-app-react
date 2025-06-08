describe('Validaciones y errores en la búsqueda', () => {
  beforeEach(() => {
    cy.visit('https://clima-app-react-ten.vercel.app/');
  });

  it('Muestra error para ciudad inválida', () => {
    cy.get('[data-cy="input-ciudad"]').type('W');
    cy.get('[data-cy="boton-submit"]').click();
    cy.get('[data-cy="error"]', { timeout: 10000 }).should('exist');
    cy.get('[data-cy="error"]').should('contain.text', 'Los datos ingresados son inválidos.');
  });

  it('Muestra error para números', () => {
    cy.get('[data-cy="input-ciudad"]').type('123');
    cy.get('[data-cy="boton-submit"]').click();
    cy.get('[data-cy="error"]', { timeout: 10000 }).should('exist');
  });

  it('Muestra error para símbolos', () => {
    cy.get('[data-cy="input-ciudad"]').type('@@@');
    cy.get('[data-cy="boton-submit"]').click();
    cy.get('[data-cy="error"]', { timeout: 10000 }).should('exist');
  });

  it('No permite enviar formulario vacío', () => {
    cy.get('[data-cy="boton-submit"]').click();
    cy.get('[data-cy="input-ciudad"]')
      .then($input => {
        expect($input[0].validationMessage).to.not.equal('');
      });
  });
}); 