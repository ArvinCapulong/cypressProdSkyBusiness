// <reference types = "cypress" />

describe('Your Business: Pubs & Clubs', function () {
    it('Checks Pubs & Clubs asset, title', function () {
        cy.visit('/pubs-clubs')

        cy.title().should('eq', 'Pubs & Clubs - Sky Business - Sky New Zealand')

        cy.url().should('eq', 'https://prod.skybusiness.co.nz/pubs-clubs')

        cy.location().should((location) => {
            expect(location.protocol).to.eq('https:')
        })
    })
});
