describe('Check swag website', () => {
  let firstTotal: number = 0.0
  let secondTotal: number = 0.0

  it('login and add items to cart', () => {
    cy.visit('https://www.saucedemo.com/')
      // Log in
      .get('[data-test=username]').type('standard_user')
      .get('[data-test=password]').type('secret_sauce')
      .get('[data-test=login-button]').click()

      // Add one item
      .get('[data-test=add-to-cart-sauce-labs-backpack]').click()
      // Goto cart
      .get('.shopping_cart_badge').click()
      // goto checkout
      .get('[data-test=checkout]').click()
      .get('[data-test=firstName]').type('kalle')
      .get('[data-test=lastName]').type('kula')
      .get('[data-test=postalCode]').type('12345')
      .get('[data-test=continue]').click()

      //get total sum
      .get('.summary_total_label').then((elem) => {
        let totalStr: string = elem.text()
        cy.log(totalStr)
        let sumAsStr = totalStr.substring(8)
        cy.log(sumAsStr)
        firstTotal = parseFloat(sumAsStr)
        cy.log(firstTotal.toString())
      })

    //Add another item
    cy.get('.shopping_cart_link').click()
      .get('[data-test=continue-shopping]').click()
      .get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
      // Goto cart
      .get('.shopping_cart_badge').click()
      // goto checkout
      .get('[data-test=checkout]').click()
      .get('[data-test=firstName]').type('kalle')
      .get('[data-test=lastName]').type('kula')
      .get('[data-test=postalCode]').type('12345')
      .get('[data-test=continue]').click()

    //get total sum
    cy.get('.summary_total_label').then((elem) => {
      let totalStr: string = elem.text()
      cy.log(totalStr)
      let sumAsStr = totalStr.substring(8)
      cy.log(sumAsStr)
      secondTotal = parseFloat(sumAsStr)
      cy.log(secondTotal.toString())
      cy.log(firstTotal.toString())
    })
    
    cy.log(secondTotal.toString())
    cy.log(firstTotal.toString())
    //expect(secondTotal).to.be.greaterThan(firstTotal)
  })
})




