import { CagPo } from '../../pageobjects/cag_po'
import { CagSysUtvPo } from '../../pageobjects/cag_sysutv_po'
import { CagSysUtvContacts } from '../../pageobjects/cag_sysutv_po'

describe('Datadriven test of contact persons', () => {
    let cagsysutvpage: CagSysUtvPo;

    before(() => {
        cagsysutvpage = new CagSysUtvPo()
        cy.fixture('sysutvcontacts.json').as('sysutvcontacts') // Here we use 'as()' which will setup an alias to the fixture in our current context
    })

    it('Check contact persons of system development business areas', function () { // NB !!!! to access context in mocha we must use use es5 function syntax
      //To access our alias we need to use keyword 'this'  
        this.sysutvcontacts.forEach((contact: CagSysUtvContacts) => {
            cy.log('Checking contact on ' + contact.page + ' page') // Since all contacts now is checked in one test. a log of which page currently is tested is good to have
            let currentPO: CagPo = cagsysutvpage.getSysUtvPage(contact.page)
            let pageurl: string = currentPO.baseUrl + currentPO.uri
            cy.visit(pageurl)
            currentPO.getContactPerson().then((theContact) => {
                expect(theContact).to.contain(contact.name)
            })   
        });
    })
})