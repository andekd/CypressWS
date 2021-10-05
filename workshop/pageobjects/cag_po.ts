export class CagPo {
    //Start with declaring attributes
    baseUrl: string;
    pageTitle: string;

    //Create constructor to initalize attributes
    constructor() {
        this.baseUrl = 'https://www.cag.se/';
        //this.pageTitle = cy.title();
        cy.title().then((theTitle)=>{
            this.pageTitle = theTitle;
        })
    }

    //Here a class often have getters and setters (Java), but we skip setters for now
    getBaseUrl(){
        return this.baseUrl;
    }

    getPageTitle(){
        return this.pageTitle;
    }

    //Create general functions for child pages
    //Here it could be a good idea to create an abstraction for business areas to hold their common functions
    getContactPerson(contactElement: string) {
        //This page have no contact person
        return 'none';
    }


}

