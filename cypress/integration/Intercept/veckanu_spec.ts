describe('Check that stubbing can be done with intercept', function () {
    context('dummy', function () {

        it('Get current week and check that its correct', function () { // NB !!!! to access context in mocha we must use use es5 function syntax
            let stubresp: string = '<time datetime="2021-W44">44</time>'

            cy.intercept('https://vecka.nu/', {
                body: '<time datetime="2021-W44">44</time>',
            }).as('week')

            cy.visit('https://vecka.nu/')
            cy.wait('@week').then(function () { 
                cy.get('time').invoke('text').should('eq', '44') 
            })
        })
    })
})