describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy
      .get("H1")
      .invoke("text")
      .should("equal", "Awesome To Do App!")
  })
})
