// <reference types = "cypress" />

describe('Your Business: Hotels & Motels', function(){
    it('Checks Hotel & Motels asset, title', function(){
        cy.visit('/hotels-motels')

        cy.title().should('eq', 'Hotels & Motels - Sky Business - Sky New Zealand')

        cy.url().should('eq', 'https://prod.skybusiness.co.nz/hotels-motels')

        cy.location().should((location) => {
            expect(location.protocol).to.eq('https:')
        })
    })
})

describe('Your Business: Retail & Office', function(){
    it('Checks Retail & Office asset, title', function(){
        cy.get('h2 > div').should('be.visible').contains('Hotels & Motels')

        cy.get('.fr-banner__content-container > h3 > div').should('be.visible').contains('Call 0800 759 333')

    })
})