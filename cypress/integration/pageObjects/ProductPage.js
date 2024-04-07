

class ProductPage {

    getCheckOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }
    getCheckOutButtonOnPromo() {
        return cy.contains('Checkout')
    }

    getCountryTextbox() {
        return cy.get('#country')
    }

    getCountrySuggestionBox() {
        return cy.get('.suggestions > ul > li > a');
    }

    getAgreeTermsConditionCheckBox() {
        return cy.get('#checkbox2')
    }

    getPurchaseButton() {
        return cy.get('input[type="submit"]')

    }

    getAlertMessage() {
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true;
        })
    }

    // this function count the each product amount and compare with total amount
    getCountAndCompareWithTotal() {
        var sum = 0;
        var total = 0;
        cy.get('tr td:nth-child(4) strong').each(($element, index, $list) => {
            const amount = $element.text();
            var res = amount.split(" ");
            res = res[1].trim();
            sum = Number(sum) + Number(res);
        }).then(function () {
            cy.log(sum);
        })

        cy.get('h3 strong').then(function ($element) {
            const amount = $element.text();
            var res = amount.split(" ");
            var totalAmount = res[1].trim();

            // here we are doing assertion verification
            expect(Number(totalAmount)).to.equal(sum);
        })
    }



}
// once class is created , it should be export to use for in other test cases
export default ProductPage;