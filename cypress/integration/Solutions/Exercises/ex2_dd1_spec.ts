import { CagPo } from '../../pageobjects/cag_po'
import { CagSysUtvPo } from '../../pageobjects/cag_sysutv_po'
import { CagSysUtvContacts } from '../../pageobjects/cag_sysutv_po'
import { CagIntPo } from '../../pageobjects/cag_int_po'
import { CagJavaPo } from '../../pageobjects/cag_java_po'
import { CagTestautoPo } from '../../pageobjects/cag_testauto_po'

describe('Check contact person for business areas in system developmen', () => {
    let cagsysutvpage: CagSysUtvPo;
    let cagintpage: CagIntPo;
    let cagjavapage: CagJavaPo;
    let cagtestautopage: CagTestautoPo;

    before(() => {
        cagsysutvpage = new CagSysUtvPo()
        cagintpage = new CagIntPo()
        cagjavapage = new CagJavaPo()
        cagtestautopage = new CagTestautoPo()
        cy.fixture('sysutvcontacts.json').as('sysutvcontacts')
    })

    it('Check contact persons of system development business areas', function () { // NB !!!! to access context in mocha we must use use es5 function syntax
        this.sysutvcontacts.forEach((contact: CagSysUtvContacts) => {
            let currentPO: CagPo
            cy.log(contact.page)
            switch (contact.page) {
                case 'Integration':
                    currentPO = cagintpage
                    break;
                case 'Java':
                    currentPO = cagjavapage
                    break;
                case 'Testauto':
                    currentPO = cagtestautopage
                    break;
                default:
                    cy.log('Unknown Page: ' + contact.page)
                    break;
            }
            let pageurl: string = currentPO.baseUrl + currentPO.uri
            cy.visit(pageurl)
            currentPO.getContactPerson().then((theContact) => {
                expect(theContact).to.contain(contact.name)
            })   
        });
    })
})