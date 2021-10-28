import { CagPo } from './cag_po'
import { CagIntPo } from './cag_int_po'
import { CagJavaPo } from './cag_java_po'
import { CagTestautoPo } from './cag_testauto_po'

export enum SysUtvPages {
    Integration,
    Java,
    Testauto
}

export class CagSysUtvContacts {
    page: string;
    name: string;
    phone: string;
    email: string;
}

export class CagSysUtvPo extends CagPo {
    uri: string = '/systemutveckling'

    constructor() {
        super(); //We want parent class constructor to run
    }

    // Override function in parent class
    getContactPerson() {
        return cy.get('#systemutveckling-bottom > .eut-container > .eut-row > :nth-child(1) > .eut-column-wrapper > .eut-element > p')
            .invoke('text')
    }

    getSysUtvPage(sysUtvPage: string) {
        switch (sysUtvPage) {
            case "Integration": {
                return new CagIntPo()
                break;
            }
            case "Java": {
                return new CagJavaPo()
                break;
            }
            case "Testauto": {
                return new CagTestautoPo()
                break;
            }
            default:
                cy.log('Unknown Page: ' + sysUtvPage)
                break;
        }
    }

    gotoIntegrationPage() {
        let intBtn = ':nth-child(1) > .eut-column-wrapper > .eut-row-inner > .eut-column-5-12 > .eut-column-wrapper-inner > .eut-element > .button'
        return cy.get(intBtn).click().then(() => {
            return new CagIntPo()
        })
    }

    gotoJavaPage() {
        let javaBtn = ':nth-child(3) > .eut-column-wrapper > .eut-row-inner > .eut-column-5-12 > .eut-column-wrapper-inner > .eut-element > .button'
        return cy.get(javaBtn).click().then(() => {
            return new CagJavaPo()
        })
    }

    gotoTestautoPage() {
        let testautoBtn = ':nth-child(6) > .eut-column-wrapper > .eut-row-inner > .eut-column-5-12 > .eut-column-wrapper-inner > .eut-element > .button'
        return cy.get(testautoBtn).click().then(() => {
            return new CagTestautoPo()
        })
    }

    // General goto function, good to have when creating data driven tests
    gotoPage(thePage: SysUtvPages) {
        switch (thePage) {
            case SysUtvPages.Integration: {
                this.gotoIntegrationPage()
                break;
            }
            case SysUtvPages.Java: {
                this.gotoJavaPage()
                break;
            }
            case SysUtvPages.Testauto: {
                this.gotoTestautoPage()
                break;
            }
        }
    }
}
