import { CagPo } from '../pageobjects/cag_po'
import { CagSysUtvPo } from '../pageobjects/cag_sysutv_po'

describe('Check how PageObjects will work', () => {
    let cagpage: CagPo;
    let cagsysutvpage: CagSysUtvPo;

    before(()=>{
        cagpage = new CagPo()
    })

    beforeEach(()=>{
        cy.visit(cagpage.getBaseUrl())
        .get('#cookie-agree').click()
    })

    it('Get title of start page', () => {
        //cy.pause()
        let correctTitle: string = 'C.A.G – Passion för utveckling.'
        let theTitle: string
        theTitle = cagpage.getPageTitle()
        cy.log('title in test spec 1: ' + theTitle)
        //expect(cagpage.getPageTitle()).to.equal('C.A.G – Passion för utveckling.')

        cagpage.checkPageTitle(correctTitle)

        cagpage.getPageWrappedTitle().then((currentTitle)=>{
            cy.log('title in test spec 2: ' + currentTitle)
            expect(currentTitle).to.equal('C.A.G – Passion för utveckling.')
        })
    })
  })