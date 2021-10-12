import { CagPo } from '../pageobjects/cag_po'
import { CagHomePo } from '../pageobjects/cag_home_po'
import { CagSysUtvPo } from '../pageobjects/cag_sysutv_po'

describe('Check how PageObjects will work', () => {
    let cagpage: CagPo;
    let caghomepage: CagHomePo;
    let cagsysutvpage: CagSysUtvPo;

    before(() => {
        cagpage = new CagPo()
        caghomepage = new CagHomePo()
    })

    beforeEach(() => {
        cy.visit(cagpage.getBaseUrl())
            .get('#cookie-agree').click()
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

/*
    // Switch context to sysutv page
    context('Testing sysutv page', () => {
        beforeEach(() => {
            cy.visit(cagpage.getBaseUrl())
            //    .get('#cookie-agree').click()
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
    it('Get contact person of integration page', () => {
        //TBD
    })

    // Remember to set up context and to create PO for java
    it('Get contact person of java page', () => {
        //TBD
    })

    // Remember to set up context  and to create PO for test-testauto
    it('Get contact person of test-testauto page', () => {
        //TBD
    })
*/
})