import { CagPo } from '../../pageobjects/cag_po'
import { CagHomePo } from '../../pageobjects/cag_home_po'
import { CagSysUtvPo } from '../../pageobjects/cag_sysutv_po'
import { CagIntPo } from '../../pageobjects/cag_int_po'
import { CagJavaPo } from '../../pageobjects/cag_java_po'
import { CagTestautoPo } from '../../pageobjects/cag_testauto_po'

describe('Check how PageObjects will work', () => {
    let cagpage: CagPo;
    let caghomepage: CagHomePo;
    let cagsysutvpage: CagSysUtvPo;
    let cagintpage: CagIntPo;
    let cagjavapage: CagJavaPo;
    let cagtestautopage: CagTestautoPo;

    before(() => {
        cagpage = new CagPo()
        caghomepage = new CagHomePo()
    })

    beforeEach(() => {
        cy.visit(cagpage.getBaseUrl())
            .get('#cookie-agree').click() // This migth be good to have as a function in parent class
    })

    it('Check title of home page', () => {
        let correctTitle: string = 'C.A.G – Passion för utveckling.'
        let theTitle: string

        // will yield undefined
        theTitle = caghomepage.getPageTitleValue()
        cy.log('In test spec calling getPageTitleValue: ' + theTitle)

        // This will work
        caghomepage.getPageTitle().then((theTitle) => {
            expect(theTitle).to.equal('C.A.G – Passion för utveckling.')
        })

        caghomepage.checkPageTitle(correctTitle)
    })

    // Switch context to sysutv 
    context('Testing sysutv page', () => {
        beforeEach(() => {
            caghomepage.gotoSystemUtvecklingPage().then((sysutvpage) => {
                cagsysutvpage = sysutvpage
            })
        })

        it('Get title of sysutv page', () => {
            let correctTitle: string = 'Systemutveckling – C.A.G'
            cagsysutvpage.getPageTitle().then((sysutvTitle) => {
                cy.log('sysutv title: ' + sysutvTitle)
                expect(sysutvTitle).to.equal(correctTitle)
            })
        })

        it('Get contact person of sysutv page', () => {
            let sysutvcont: string = 'Niclas Lindqvist'
            cagsysutvpage.getContactPerson().then((theContact) => {
                cy.log('sysutvpage contact person: ' + theContact)
                expect(theContact).to.contain(sysutvcont)
            })
        })
    })

    // Remember to set up context and to create PO for integration
    // Switch context to int 
    context('Testing integration page', () => {
        beforeEach(() => {
            caghomepage.gotoSystemUtvecklingPage().then((sysutvpage) => {
                cagsysutvpage = sysutvpage
                cagsysutvpage.gotoIntegrationPage().then((intpage) => {
                    cagintpage = intpage
                })
            })
        })

        it('Get contact person of integration page', () => {
            let intcontact: string = 'Magnus Söderström'
            cagintpage.getContactPerson().then((theContact) => {
                cy.log('intpage contact person: ' + theContact)
                expect(theContact).to.contain(intcontact)
            })
        })
    })

    // Remember to set up context and to create PO for java
    // Switch context to java 
    context('Testing java page', () => {
        beforeEach(() => {
            caghomepage.gotoSystemUtvecklingPage().then((sysutvpage) => {
                cagsysutvpage = sysutvpage
                cagsysutvpage.gotoJavaPage().then((javapage) => {
                    cagjavapage = javapage
                })
            })
        })
        it('Get contact person of java page', () => {
            let javacontact: string = 'Anders Engström'
            cagjavapage.getContactPerson().then((theContact) => {
                cy.log('javapage contact person: ' + theContact)
                expect(theContact).to.contain(javacontact)
            })
        })
    })

    // Remember to set up context  and to create PO for test-testauto
    // Switch context to testauto 
    context('Testing testauto page', () => {
        beforeEach(() => {
            caghomepage.gotoSystemUtvecklingPage().then((sysutvpage) => {
                cagsysutvpage = sysutvpage
                cagsysutvpage.gotoTestautoPage().then((testautopage) => {
                    cagtestautopage = testautopage
                })
            })
        })
        it('Get contact person of test-testauto page', () => {
            let testautocontact: string = 'David Caro'
            cagtestautopage.getContactPerson().then((theContact) => {
                cy.log('testautopage contact person: ' + theContact)
                expect(theContact).to.contain(testautocontact)
            })
        })
    })
})