describe('Checking values in variables', function () {
  let homeTitle: string

  it('Get title of CAG home page', function () {
    cy.visit('https://www.cag.se')
    .title().then(function(theTitle) {
      homeTitle = theTitle
      cy.log('homeTitle in then: ' + homeTitle) // Works logs correct title
    })
    cy.log('homeTitle after then: ' + homeTitle) // Yields undefined

    cy.wait(3000)
    cy.log('homeTitle after 3 sec.: ' + homeTitle) // Yields undefined

    cy.wait(0).then(function(){
      cy.log('homeTitle in zero sec wait then: ' + homeTitle) // Works logs correct title
    })
  })
})




