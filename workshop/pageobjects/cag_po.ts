export class CagPo {
    //Start with declaring attributes
    baseUrl: string;
    //pageTitle: string;

    //Create constructor to initalize attributes
    constructor() {
        this.baseUrl = 'https://www.cag.se/';
    }

    //Here a class often have getters and setters (Java), but we skip setters for now
    getBaseUrl(){
        return this.baseUrl;
    }

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
    

    //Create general functions for child pages
    //Here it could be a good idea to create an abstraction for business areas to hold their common functions
    getContactPerson(contactElement: string) {
        //This page have no contact person
        return 'none';
    }

    //Create specific functions for this page
    gotoSystemUtvecklingPage(){
        //TBD
    }
}

