
export class CagPo {
    //Start with declaring attributes
    baseUrl: string;

    //Create constructor to initalize attributes
    constructor() {
        this.baseUrl = 'https://www.cag.se/';
    }

    //Here a class often have getters and setters (Java), but we skip setters for now
    getBaseUrl(){
        return this.baseUrl;
    }

    // Below we will define general functions that can be of use for all child pages

    // This will return undefined, so not very useful
    getPageTitle(){
        let myTitle: string
        cy.title().then((theTitle)=>{
            myTitle = theTitle
            cy.log('title: ' + theTitle)
        })
        return myTitle;
    }

    // Here we do the test/assertion in the PO
    checkPageTitle(correctTitle: string){
        cy.title().then((theTitle)=>{
            expect(theTitle).to.equal(correctTitle)
        })
    }

    // Here we use cy.wrap to return a chainable so that the promise can be resolved in calling function (in test spec)
    getPageWrappedTitle(){
        return cy.title().then((theTitle)=>{
            return cy.wrap(theTitle)
        })
    }

    getTit(){
        return cy.title()
    }
    

    // Not all pages have contact person, the pages that do will have to override his function
    getContactPerson(contactElement: string) {
        return 'none';
    }   
}

