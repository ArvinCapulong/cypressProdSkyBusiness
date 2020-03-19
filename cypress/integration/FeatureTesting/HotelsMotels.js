// <reference types = "cypress" />

describe('Your Business: Hotels & Motels', function () {
    it('Checks Hotel & Motels asset, title', function () {
        cy.visit('/hotels-motels')
        cy.title().should('eq', 'Hotels & Motels - Sky Business - Sky New Zealand')
        cy.url().should('eq', 'https://prod.skybusiness.co.nz/hotels-motels')
        cy.location().should((location) => {
            expect(location.protocol).to.eq('https:')
        })
    })

    it('Checks Hotels & Motels main asset, title', function () {
        cy.get('h2 > div').should('be.visible').contains('Hotels & Motels')
        cy.get('.fr-banner__content-container > h3 > div').should('be.visible').contains('Call 0800 759 333')
        cy.get('.fr-banner__image').should('be.visible').and('have.attr', 'src', '/documents/20315/38837/bruno-van-der-kraan-i4rOpdj444c-unsplash.jpg/b8f27b35-4715-1467-b0e0-187c14ede1f2?version=1.0&t=1583394772873&download=true')
    })

    it('Checks main description header and paraph.', function () {
        cy.get('.fr-heading-bs-3 > .fr-heading-text-color-midnight > div').should('be.visible').contains('Bring your guests')
        cy.get('#fragment-21754-ptaf > .fr-paragraph > div > :nth-child(1)').should('be.visible').contains('that keeping your guests happy')
    })

    it('Checks secondary image and numbered list.', function () {
        cy.get('.w-100').should('be.visible').and('have.attr', 'src', '/documents/20315/38837/StockSnap_8ENK7P4YSJ.jpg/5259d93b-ffac-a58d-cbc0-2f3d7b1c822e?version=1.0&t=1583394790534&download=true')
        cy.get('#fragment-21754-adsq > .fr-paragraph > div').should('be.visible').contains('01')
        cy.get(':nth-child(9) > .container > .row > :nth-child(3)').should('be.visible').contains('Drive customer loyalty and repeat bookings')
        cy.get('#fragment-21754-idcf > .fr-paragraph > div').should('be.visible').contains('03')
    })

    it('Checks Additional Services box.', function () {
        cy.get('.fr-twri_text-container > h3 > div').should('be.visible').contains('Additional Services')
        cy.get('.fr-twri_text-container > :nth-child(2)').should('be.visible').contains('Movielink provides major hotels with more of the latest in-room entertainment;')
        cy.get('.fr-twri_text-container > :nth-child(2) > :nth-child(3) > a').should('be.visible').and('have.attr', 'href', 'http://www.ezestream.com.au/index.html')
        cy.get('.fr-twri_text-container > :nth-child(2) > :nth-child(4)').should('be.visible').contains('0800 759 333')
    })
});