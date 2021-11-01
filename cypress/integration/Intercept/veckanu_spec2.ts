import { wrap } from "cypress/types/lodash"


describe('Check that stubbing can be done with intercept', () => {

    before(() => {
        cy.wrap('Hello').as('hej')
    })

    it('Get current week and check that its correct', function() {
        let stubresp: string = '<time datetime="2021-W44">44</time>'
        //cy.intercept('https://vecka.nu/').as('week')

        cy.intercept('https://vecka.nu/', {
            body: '<time datetime="2021-W44">44</time>',
        }).as('week')

        cy.visit('https://vecka.nu/')
        cy.wait('@week').then(() => {
            cy.get('time').invoke('text').should('eq', '44')
        })
        cy.log(this.hej)
        cy.log('@hej')
    })
})
