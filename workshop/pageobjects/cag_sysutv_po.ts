import { CagPo } from './cag_po'
import { CagIntPo } from './cag_int_po'
import { CagJavaPo } from './cag_java_po'
import { CagTestautoPo } from './cag_testauto_po'

export class CagSysUtvPo extends CagPo {
    uri: string = '/systemutveckling'

    constructor() {
        super(); //We want parent class constructor to run
    }

    getContactPerson(){
        return cy.get('#systemutveckling-bottom > .eut-container > .eut-row > :nth-child(1) > .eut-column-wrapper > .eut-element > p')
        .invoke('text')
    }

    gotoIntegrationPage() {
        let intBtn = ':nth-child(1) > .eut-column-wrapper > .eut-row-inner > .eut-column-5-12 > .eut-column-wrapper-inner > .eut-element > .button'
        return cy.get(intBtn).click().then(()=>{
            return new CagIntPo()
        })
    }

    gotoJavaPage() {
        let javaBtn = ':nth-child(3) > .eut-column-wrapper > .eut-row-inner > .eut-column-5-12 > .eut-column-wrapper-inner > .eut-element > .button'
        return cy.get(javaBtn).click().then(()=>{
            return new CagJavaPo()
        })
    }

    gotoTestautoPage() {
        let testautoBtn = ':nth-child(6) > .eut-column-wrapper > .eut-row-inner > .eut-column-5-12 > .eut-column-wrapper-inner > .eut-element > .button'
        return cy.get(testautoBtn).click().then(()=>{
            return new CagTestautoPo()
        })
    }
}
