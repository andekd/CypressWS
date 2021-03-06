import { CagPo } from './cag_po'
import { CagSysUtvPo } from './cag_sysutv_po'

export class CagHomePo extends CagPo {

    constructor() {
        super(); //We want parent class constructor to run
    }

    //Create specific functions for this po
    gotoSystemUtvecklingPage() {
        let sysutvBtn = '.eut-mobile-row-hide > .eut-container > .eut-row > .eut-column > .eut-column-wrapper > .block-image-right > .button'
        return cy.get(sysutvBtn).click().then(()=>{
            return new CagSysUtvPo()
        })
    }

    // Below we will probably implement goto page for the remaing BA's
}