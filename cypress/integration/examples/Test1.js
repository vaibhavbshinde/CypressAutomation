// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My first testsuite', function () {

    it('My First Case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);

        //In selenium get , actually hit url in the browser. however in cypress get acts like find element of selenium
        // added :visible , to count only visible elements
        // cy.get('.product:visible').should('have.length',4)

        //parent child chaining
        cy.get('.products').find('.product').should('have.length', 4);


        // here we are finding , fist container, then under container number of list afterthat selecting specific index and then click 
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

        cy.get('.products').find('.product').each(($e1, index, $list) => {
            const textVeg = $e1.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                cy.wrap($e1).find('button').click();
            }

        })

        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text' ,'GREENKART');

        // how the promising is work
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())
          }
        )

        cy.log("some important concepts .....")

        // as we come to know , that cypress cant support to store the value in variable , when any 
        // command is not belongs to cypress eg. text(). which causing error
        // so workaround this they come with functionality is called as alias (ie. as)
       // important : if look carefully line# 16,20, 22 , there we  have '.product' css for parent
       // however we have to write eveytime, as because above mentioned issue.
       // to resolve this line #16 will change like below by adding alias command
       cy.get('.products').as('productLocator'); // to change line #16 added this line

       cy.get('@productLocator').find('.product').should('have.length', 4);  // -- line 16 looks like

       cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click();


    })
})