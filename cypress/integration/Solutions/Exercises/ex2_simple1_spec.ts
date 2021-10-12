import { CagIntPo } from '../../pageobjects/cag_int_po'
import { CagJavaPo } from '../../pageobjects/cag_java_po'
import { CagTestautoPo } from '../../pageobjects/cag_testauto_po'

describe('Check contact person for business areas in system developmen', () => {
    let cagintpage: CagIntPo;
    let cagjavapage: CagJavaPo;
    let cagtestautopage: CagTestautoPo;

    before(() => {
        cagintpage = new CagIntPo()
        cagjavapage = new CagJavaPo()
        cagtestautopage = new CagTestautoPo()
    })

    it('Check contact person of integration page', () => {
        let intcontact: string = 'Magnus Söderström'
        let intpageurl: string = cagintpage.baseUrl + cagintpage.uri
        cy.visit(intpageurl)
        cagintpage.getContactPerson().then((theContact) => {
            expect(theContact).to.contain(intcontact)
        })
    })

    it('Check contact person of java page', () => {
        let javacontact: string = 'Anders Engström'
        let javapageurl: string = cagjavapage.baseUrl + cagjavapage.uri
        cy.visit(javapageurl)
        cagjavapage.getContactPerson().then((theContact) => {
            expect(theContact).to.contain(javacontact)
        })
    })

    it('Check contact person of test-testauto page', () => {
        let testautocontact: string = 'David Caro'
        let testautopageurl: string = cagtestautopage.baseUrl + cagtestautopage.uri
        cy.visit(testautopageurl)
        cagtestautopage.getContactPerson().then((theContact) => {
            expect(theContact).to.contain(testautocontact)
        })
    })
})