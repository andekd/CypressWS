import { CagPo } from './cag_po'

export class CagTestautoPo extends CagPo {
    uri: string = '/systemutveckling/test-och-testautomatisering'

    constructor() {
        super(); //We want parent class constructor to run
    }

    getContactPerson(){
        return cy.get('.block-kontakt > p')
        .invoke('text')
    }
}
