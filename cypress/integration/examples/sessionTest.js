// type definitions for Cypress object "cy"
/// <reference types="cypress" />



describe('My third testsuite', function () {


    it("Login Token session stored into session storage", function () {

        // This will login and store the token into localstorage
        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem("token", Cypress.env('token'))
                }

            })

        })

        cy.get(".card-body button:last-of-type").eq(1).click();
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click();
        cy.get("[placeholder*='Country']").type("ind");
        cy.get(".ta-results button").each(($e1, index, $list) => {
            if ($e1.text().trim() === "India") {
                cy.wrap($e1).click()
            }
        })


        cy.get(".action__submit").click();
        cy.wait(2000);

        // download file , whatever it download it gets into downloads folder under project area
        cy.get(".order-summary button").click();






    })



})