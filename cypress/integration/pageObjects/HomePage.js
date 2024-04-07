class HomePage{

    getNameTextBox(){
        return cy.get('form input[name="name"]')
    }

    getGenderDropdown(){
        return cy.get('select')
    }

    getEntrepreneurRadio(){
        return cy.get('#inlineRadio3')
    }

    getShopTabLink(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    getTwoWayDataBindingTextBox(){
       return cy.get(':nth-child(4) > .ng-untouched')
    }


}
// once class is created , it should be export to use for in other test cases
export default HomePage;
