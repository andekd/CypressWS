describe('Checking values in variables', function () {
  let homeTitle: string

  before(function () {
    cy.visit('https://www.cag.se')
      .title().then(function (theTitle) {
        homeTitle = theTitle
        cy.log('homeTitle in then: ' + homeTitle) // Works logs correct title
      })
  })

  it('Get title of CAG home page', function () {
    cy.log('homeTitle after then: ' + homeTitle) // Works logs correct title
  })
})

/*
describe('check states', function () {
  before(function () {
    //Get default value
  })
  context('state 1', function () {
    before(function () {
      // Set state 1 and get new value
    })
    it('check state 1 value', function () {
      // expect(state1).to.be.lessThan(default)
    })
  })
  context('state 2', function () {
    before(function () {
      // Set state 2 and get new value
    })
    it('check state 1 value', function () {
      // expect(state2).to.be.greaterThan(default)
    })
  })
})
*/
