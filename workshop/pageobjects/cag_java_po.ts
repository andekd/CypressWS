import { CagPo } from './cag_po'

export class CagJavaPo extends CagPo {
    uri: string = 'systemutveckling/java'

    constructor() {
        super(); //We want parent class constructor to run
    }

    getContactPerson(){
        return cy.get('.block-kontakt > p')
        .invoke('text')
    }
}
