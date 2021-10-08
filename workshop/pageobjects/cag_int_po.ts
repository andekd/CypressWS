import { CagPo } from './cag_po'

export class CagIntPo extends CagPo {
    uri: string = 'systemutveckling/integration'

    constructor() {
        super(); //We want parent class constructor to run
    }

    getContactPerson(){
        return cy.get('.block-kontakt > p')
        .invoke('text')
    }
}
