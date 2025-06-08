describe('Comparación exitosa entre dos ciudades', () => {
  beforeEach(() => {
    cy.visit('https://clima-app-react-ten.vercel.app/');
    cy.get('[data-cy="boton-comparar"]').click();
  });

  it('Compara Buenos Aires y Córdoba correctamente', () => {
    cy.get('[data-cy="input-ciudad"]').type('Buenos Aires');
    cy.get('[data-cy="input-ciudad2"]').type('Córdoba');
    cy.get('[data-cy="boton-submit"]').click();
    cy.get('[data-cy="resultado-comparacion"]', { timeout: 10000 }).should('exist');
    cy.get('[data-cy="comparacionContainer"] [data-cy="ciudad-comparada"]').should('have.length', 2);
  });
}); 