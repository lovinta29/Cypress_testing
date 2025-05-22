describe('home page', () => {
  it('The h1 contains the correct text', () => {
    cy.visit('https://docs.cypress.io/app/get-started/why-cypress')
    cy.get('h1').should('contain', 'Why Cypress?')
  })
})