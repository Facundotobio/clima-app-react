describe('Pruebas responsivas', () => {
  beforeEach(() => {
    cy.viewport(400, 800);
    cy.visit('https://clima-app-react-ten.vercel.app/');
  });

  it('El formulario se ajusta a max-width y los inputs se apilan', () => {
    cy.get('[data-cy="form"]').should('have.css', 'max-width').and('match', /500px|80%|600px/);
    cy.get('[data-cy="inputsContainer"]').should('have.css', 'flex-direction', 'column');
  });

  it('El botón siempre es visible', () => {
    cy.get('[data-cy="boton-submit"]').should('be.visible');
  });

  it('Padding vertical aumentado', () => {
    cy.get('[data-cy="form"]').should('have.css', 'padding-top').and('match', /1.5|2/);
    cy.get('[data-cy="form"]').should('have.css', 'padding-bottom').and('match', /1.5|2/);
  });
}); 