describe('Check contacts at CAG', () => {
  it('Check test auto contact at CAG', () => {
    cy.visit('https://www.cag.se')
      .get('#cookie-agree').click()
      .title()
      .should('eq', 'C.A.G – Passion för utveckling.')

      //Goto Systemutveckling page
      .get('.eut-mobile-row-hide > .eut-container > .eut-row > .eut-column > .eut-column-wrapper > .block-image-right > .button').click()
      .title()
      .should('eq', 'Systemutveckling – C.A.G')

      //Goto Test page
      .get(':nth-child(6) > .eut-column-wrapper > .eut-row-inner > .eut-column-5-12 > .eut-column-wrapper-inner > .eut-element > .button').click()
      .title().should('eq', 'Test och Testautomatisering – C.A.G')
      .get('.block-kontakt > p')
      //.should('have.value', ' David Caro') // This should work, but here it will not, not sure why. Suspect multiple loads.
      .then(($contact) => {
        expect($contact).to.contain('David Caro')
      })
  })
  it('check types in ts', () => {
    let xx: number = 1
    let yy: string = '2'
    let zz: string = '2.1'
    xx = xx + parseInt(yy)
    cy.log(String(xx))
    xx = xx + parseInt(zz)
    cy.log(String(xx))
    xx = xx + parseFloat(zz)
    cy.log(String(xx))
  })
})

