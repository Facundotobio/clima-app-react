describe('Comparación de clima: errores y validaciones', () => {
  beforeEach(() => {
    cy.visit('https://clima-app-react-ten.vercel.app/');
    cy.get('[data-cy="boton-comparar"]').click();
  });

  it('No permite comparar con un solo campo', () => {
    cy.get('[data-cy="input-ciudad"]').type('Buenos Aires');
    cy.get('[data-cy="boton-submit"]').click();
    cy.get('[data-cy="input-ciudad2"]')
      .then($input => {
        expect($input[0].validationMessage).to.not.equal('');
      });
  });

  it('No permite comparar ciudades iguales', () => {
    cy.get('[data-cy="input-ciudad"]').type('Salta');
    cy.get('[data-cy="input-ciudad2"]').type('Salta');
    cy.get('[data-cy="boton-submit"]').click();
    cy.get('[data-cy="error"]', { timeout: 10000 }).should('exist');
  });

  it('No permite comparar con campos vacíos', () => {
    cy.get('[data-cy="boton-submit"]').click();
    cy.get('[data-cy="input-ciudad"]')
      .then($input => {
        expect($input[0].validationMessage).to.not.equal('');
      });
    cy.get('[data-cy="input-ciudad2"]')
      .then($input => {
        expect($input[0].validationMessage).to.not.equal('');
      });
  });
}); 