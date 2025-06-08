describe('Recarga de página y reseteo de estado', () => {
  it('Al recargar, desaparecen resultados y errores', () => {
    cy.visit('https://clima-app-react-ten.vercel.app/');
    cy.get('[data-cy="input-ciudad"]').type('Buenos Aires');
    cy.get('[data-cy="boton-submit"]').click();
    cy.get('[data-cy="resultado-clima"]', { timeout: 10000 }).should('exist');
    cy.reload();
    cy.get('[data-cy="resultado-clima"]').should('not.exist');
    // Simular error
    cy.get('[data-cy="input-ciudad"]').type('W');
    cy.get('[data-cy="boton-submit"]').click();
    cy.get('[data-cy="error"]', { timeout: 10000 }).should('exist');
    cy.reload();
    cy.get('[data-cy="error"]').should('not.exist');
  });
}); 