
export class CagPo {
    //Start with declaring attributes
    baseUrl: string;
    uri: string;

    //Create constructor to initalize attributes
    constructor() {
        this.baseUrl = 'https://www.cag.se/';
        this.uri = '';
    }

    //Here a class often have getters and setters (Java), but we skip setters for now
    getBaseUrl() {
        return this.baseUrl;
    }

    getUri() {
        return this.uri;
    }

    // Below we will define general functions that can be of use for all child pages

    // This will return undefined, so not very useful, just here to show that deducted values can't be returned directly
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

    // Here we do the test/assertion in the PO, not recommended...
    checkPageTitle(correctTitle: string) {
        cy.title().then((theTitle) => {
            expect(theTitle).to.equal(correctTitle)
        })
    }

    //The home/root page have no contact person, so we retyrn 'nono'
    // this will be returned as a chainable. We use function wrap() to achive this.
    // Instead of having functions that doesn't return any 'real' valuie, we migth consider using an interface instead.
    getContactPerson(){
        return cy.wrap('none')
    }
}

