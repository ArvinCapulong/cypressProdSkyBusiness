// <reference types = "cypress" />

describe('Your Business: Aged Care', function () {
    it('Checks Aged Care asset, title', function () {
        cy.visit('/aged-care')

        cy.title().should('eq', 'Aged Care - Sky Business - Sky New Zealand')

        cy.url().should('eq', 'https://prod.skybusiness.co.nz/paged-care')

        cy.location().should((location) => {
            expect(location.protocol).to.eq('https:')
        })
    })
});
