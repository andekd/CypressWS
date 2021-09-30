describe('Check contacts at CAG', () => {
    it('Check test auto contact at CAG', () => {
      cy.visit('https://www.cag.se')
      .get('#cookie-agree').click()
      .title().should('eq', 'C.A.G – Passion för utveckling.')

      //Goto Systemutveckling page
      .get('.eut-mobile-row-hide > .eut-container > .eut-row > .eut-column > .eut-column-wrapper > .block-image-right > .button').click()
      .title().should('eq', 'Systemutveckling – C.A.G')

      //Goto Test page
      .get(':nth-child(6) > .eut-column-wrapper > .eut-row-inner > .eut-column-5-12 > .eut-column-wrapper-inner > .eut-element > .button').click()
      .title().should('eq', 'Test och Testautomatisering – C.A.G')
      .get('.block-kontakt > p')
      .contains(' David Caro')
    })
  })

