// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My third testsuite', function () {

    it('My third Case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");

        //checkbox value making checked and unchecking  and verifing it
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(['option2','option3']);

        //static dropdown
        cy.get('select').select('option2').should('have.value','option2');


    })
})