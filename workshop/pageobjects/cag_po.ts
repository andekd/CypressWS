
export class CagPo {
    //Start with declaring attributes
    baseUrl: string;

    //Create constructor to initalize attributes
    constructor() {
        this.baseUrl = 'https://www.cag.se/';
    }

    //Here a class often have getters and setters (Java), but we skip setters for now
    getBaseUrl() {
        return this.baseUrl;
    }

    // Below we will define general functions that can be of use for all child pages

    // This will return undefined, so not very useful
    getPageTitleValue() {
        let myTitle: string
        cy.title().then((theTitle) => {
            myTitle = theTitle
            cy.log('In getPageTitleValue: ' + theTitle)
        })
        return myTitle;
    }

    // Return the cypress call, chainable and can be resolved in test spec
    getPageTitle() {
        return cy.title()
    }

    // Here we do the test/assertion in the PO
    checkPageTitle(correctTitle: string) {
        cy.title().then((theTitle) => {
            expect(theTitle).to.equal(correctTitle)
        })
    }
}

