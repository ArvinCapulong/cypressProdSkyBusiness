// <reference types = "cypress" />

describe('Your Business: Aged Care', function () {
    it('Checks Aged Care asset, title', function () {
        cy.visit('/aged-care')
        cy.title().should('eq', 'Aged Care - Sky Business - Sky New Zealand')
        cy.url().should('eq', 'https://prod.skybusiness.co.nz/aged-care')
        cy.location().should((location) => {
            expect(location.protocol).to.eq('https:')
        })
    });

    it('Checks Aged Care main banner, phone number, image', function () {
        cy.get('h2 > div').should("be.visible").contains('Aged Care')
        cy.get('.fr-banner__content-container > h3 > div').should("be.visible").contains('Call 0800 759 333')
        cy.get('.fr-banner__image').should("be.visible").and("have.attr", 'src', '/documents/20315/38837/jack-finnigan-M9EctVUPrp4-unsplash.jpg/5db99dbf-15eb-433e-cf85-f44f97b396ce?version=1.0&t=1583394780668&download=true')
    })

    it('Check first paragraph header and text', function () {
        cy.get('.fr-heading-bs-3 > .fr-heading-text-color-midnight > div').should("be.visible").and("not.be.empty")
        cy.get('#fragment-21754-ptaf > .fr-paragraph > div > :nth-child(1)').should("be.visible").and("not.be.empty")
    })

    it('Check secondary image and numbered list', function () {
        cy.get('.w-100').should("be.visible").and("have.attr", 'src', '/documents/20315/38837/matthew-bennett-78hTqvjYMS4-unsplash.jpg/6ae819c3-c084-c816-811d-2ef5eabe2e6f?version=1.0&t=1583394785859&download=true')
        cy.get(':nth-child(9) > .container > .row > :nth-child(2)').should("be.visible").and("not.be.empty").contains('01')
        cy.get(':nth-child(9) > .container > .row > :nth-child(3)').should("be.visible").and("not.be.empty").contains('02')
        cy.get(':nth-child(9) > .container > .row > :nth-child(4)').should("be.visible").and("not.be.empty").contains('03')
    })

    it('Check Additional Services', function () {
        cy.get('.fr-twri_text-container > h3 > div').should("be.visible").contains('Additional Services')
        cy.get('.fr-twri_text-container > :nth-child(2)').should("be.visible").and("not.be.empty")
    })
});
