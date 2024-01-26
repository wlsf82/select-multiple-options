describe('Select multiple options', () => {
  beforeEach(() => {
    cy.visit('/index.html')
  })

  it('selects multiple options in a select field', () => {
    cy.get('select[name="fruit"]')
      .select(['apple', 'banana'])

    cy.contains(
      'p',
      "You've selected the following fruits: apple, banana"
    ).should('be.visible')
  })
})
