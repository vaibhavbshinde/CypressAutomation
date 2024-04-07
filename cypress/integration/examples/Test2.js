// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My second testsuite', function () {

    it('My second Case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);

        //parent child chaining
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            const textVeg = $e1.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                cy.wrap($e1).find('button').click();
            }

        })
        cy.get('.cart-icon > img').click();


    })
})