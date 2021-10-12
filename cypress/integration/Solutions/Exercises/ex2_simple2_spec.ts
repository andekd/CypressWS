import { CagPo } from '../../pageobjects/cag_po'
import { CagIntPo } from '../../pageobjects/cag_int_po'
import { CagJavaPo } from '../../pageobjects/cag_java_po'
import { CagTestautoPo } from '../../pageobjects/cag_testauto_po'

describe('Check contact person for business areas in system developmen', () => {
    let cagintpage: CagIntPo;
    let cagjavapage: CagJavaPo;
    let cagtestautopage: CagTestautoPo;
    let pagelist: CagPo[];
    let contactlist: string[];

    before(() => {
        cagintpage = new CagIntPo()
        cagjavapage = new CagJavaPo()
        cagtestautopage = new CagTestautoPo()
        pagelist = [cagintpage, cagjavapage, cagtestautopage]
        contactlist = ['Magnus Söderström','Anders Engström','David Caro']
    })

    it('Check contact persons of system development business areas', () => {

        for (var _i = 0; _i < pagelist.length; _i++) {
            let currentPage = pagelist[_i]
            let currentContact = contactlist[_i]
            cy.log('Checking contact person for ' + currentPage.uri);
            cy.visit(currentPage.baseUrl + currentPage.uri)
            currentPage.getContactPerson().then((theContact) => {
                expect(theContact).to.contain(currentContact)
            })
    
          }
    })
})