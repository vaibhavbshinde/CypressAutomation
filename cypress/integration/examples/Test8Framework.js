// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe('My third testsuite', function() {


    // this is the before function which will be executed before all testcase execution i.e. it   
    beforeEach(function() {

        // here we are reading the testdata which are present into fixture folder
          cy.fixture('test8framework').then(function (data) {
            this.data = data;

        })

    })

    it('My First framework test', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('form input[name="name"]').type(this.data.name);
        cy.get('select').select(this.data.gender);
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name);

        // confirming the provided value should be atleast 2 minlength
        // have.attr is the property verify
        cy.get('form input[name="name"').should('have.attr', 'minlength', '2');

        cy.get('#inlineRadio3').should('be.disabled');
        // cy.pause();

        // now click on the shop link
        cy.get(':nth-child(2) > .nav-link').click();


        // this is one way to add product is cart
        cy.get('h4.card-title').each(($element, index, $list) => {
            if ($element.text().includes('iphone X')) {
                cy.get('button.btn.btn-info').eq(index).click();
            }
        });


        //another way is to create your owns custom command. 
        //for that custom command creation login needs to write into support folder under command.
        // also here i have created the parameters in the fixture file test8framework.json
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element);
        });

    })


    it('My Testcase using PageObjectModel', function() {
 
        const homepage = new HomePage();
        const productpage = new ProductPage();
        cy.log(this.data.name);
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homepage.getNameTextBox().type(this.data.name);
        homepage.getGenderDropdown().select(this.data.gender);
        homepage.getTwoWayDataBindingTextBox().should('have.value', this.data.name);
        homepage.getNameTextBox().should('have.attr', 'minlength', '2');
        homepage.getEntrepreneurRadio().should('be.disabled');
        homepage.getShopTabLink().click();


        //another way is to create your owns custom command. 
        //for that custom command creation login needs to write into support folder under command.
        // also here i have created the parameters in the fixture file test8framework.json
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element);
        });
        productpage.getCheckOutButton().click();
       
        productpage.getCountAndCompareWithTotal();


        productpage.getCheckOutButtonOnPromo().click();

        productpage.getCountryTextbox().type('India');

        //test case sepeific we can set the timeout value as well
        Cypress.config('defaultCommandTimeout',30000);
        
        productpage.getCountrySuggestionBox().click();

        productpage.getAgreeTermsConditionCheckBox().click({force: true});
        productpage.getPurchaseButton().click();

        //when direct text comparision is not possible. then we have to resolve the promise
        productpage.getAlertMessage();

    })

})