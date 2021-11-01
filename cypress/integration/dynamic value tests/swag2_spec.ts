import { any } from "cypress/types/bluebird"

describe('Check swag website', function () {

  function gotoShop() {
    cy.visit('https://www.saucedemo.com/')
      .get('[data-test=username]').type('standard_user')
      .get('[data-test=password]').type('secret_sauce')
      .get('[data-test=login-button]').click()
  }

  function buyItem(theItem: String) {
    let backpackElement: string = '[data-test=add-to-cart-sauce-labs-backpack]'
    let fleeceJacketElement: string = '[data-test=add-to-cart-sauce-labs-fleece-jacket]'
    let oneSizeElement: string = '[data-test=remove-sauce-labs-onesie]'

    switch (theItem) {
      case 'backpack': {
        cy.get(backpackElement).click()
        break;
      }
      case 'fleecejacket': {
        cy.get(fleeceJacketElement).click()
        break;
      }
      case 'onesize': {
        cy.get(oneSizeElement).click()
        break;
      }
    }
  }

  function gotoCheckout() {
    // Goto cart
    cy.get('.shopping_cart_badge').click()
      // goto checkout
      .get('[data-test=checkout]').click()
      .get('[data-test=firstName]').type('kalle')
      .get('[data-test=lastName]').type('kula')
      .get('[data-test=postalCode]').type('12345')
      .get('[data-test=continue]').click()
  }

  function getTotalPrice(theAlias: string) {
    return cy.get('.summary_total_label').invoke('text').as(theAlias)
  }

  function goBackToShop() {
    cy.get('[data-test=cancel]').click()
  }

  context('With 1 item in cart', function () {
    before(() => {
      gotoShop()
      buyItem('backpack')
      gotoCheckout()
      getTotalPrice('oneItemTotal')
      goBackToShop()
    })

    it('Buy second item and check that total price is higher', function () { // !!! Observe that we need to have 'old' function call here !!!!!!
      // Buy another item
      buyItem('fleecejacket')
      gotoCheckout()
      getTotalPrice('twoItemsTotal').then(function () {
        let oneItemAsNumber: number = parseFloat(this.oneItemTotal.substring(8))
        let twoItemsAsNumber: number = parseFloat(this.twoItemsTotal.substring(8))
        cy.log('one item: ' + oneItemAsNumber)
        cy.log('two items: ' + twoItemsAsNumber)
        expect(twoItemsAsNumber).to.be.greaterThan(oneItemAsNumber)
      })
    })
  })
})

