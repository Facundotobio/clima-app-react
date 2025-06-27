describe('Búsqueda simple exitosa y renderizado de elementos clave', () => {
  beforeEach(() => {
    cy.visit('https://clima-app-react-ten.vercel.app/');
  });

  it('Renderiza elementos clave', () => {
    cy.get('[data-cy="titulo"]').should('exist');
    cy.get('[data-cy="form"]').should('exist');
    cy.get('[data-cy="select-dias"]').should('exist');
    cy.get('[data-cy="boton-submit"]').should('exist');
    cy.get('[data-cy="boton-busqueda"]').should('exist');
    cy.get('[data-cy="boton-comparar"]').should('exist');
  });

  it('Renderiza el Footer correctamente', () => {
    cy.get('footer').should('exist');
    cy.get('footer').should('contain.text', 'Facundo Tobio');
    cy.get('footer').should('contain.text', 'Todos los derechos reservados');
  });

  it('Realiza una búsqueda exitosa', () => {
    cy.get('[data-cy="input-ciudad"]').type('Buenos Aires');
    cy.get('[data-cy="select-dias"]').select('3 días');
    cy.get('[data-cy="boton-submit"]').click();
    cy.get('[data-cy="resultado-clima"]', { timeout: 10000 }).should('exist');
    cy.get('[data-cy="diasContainer"] [data-cy="dia"]').should('have.length.at.least', 1);
  });
}); 