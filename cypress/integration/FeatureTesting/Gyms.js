// <reference types = "cypress" />

describe('Your Business: Gyms', function () {
    it('Checks Gyms asset, title', function () {
        cy.visit('/gyms')
        cy.title().should('eq', 'Gyms - Sky Business - Sky New Zealand')
        cy.url().should('eq', 'https://prod.skybusiness.co.nz/gyms')
        cy.location().should((location) => {
            expect(location.protocol).to.eq('https:')
        })
    })

    it('Checks main image, header, phone number', function () {
        cy.get('h2 > div').should("be.visible").contains('Gyms')
        cy.get('.fr-banner__content-container > h3 > div').should("be.visible").contains('Call 0800 759 333')
        cy.get('.fr-banner__image').should("be.visible").and("have.attr", 'src', '/documents/20315/38837/victor-freitas-WvDYdXDzkhs-unsplash.jpg/be4a234a-5371-3886-d168-83f7bf3f7b26?version=1.0&t=1583394796177&download=true')
    })

    it('Checks first paragraph header and text', function () {
        cy.get('.fr-heading-bs-3 > .fr-heading-text-color-midnight > div').should("be.visible").and("not.be.empty")
        cy.get('p').should("be.visible").and("not.be.empty")
    })

    it('Checks secondary image, paragraph header and text', function () {
        cy.get('.w-100').should("be.visible").and("have.attr", 'src', '/documents/20315/38837/scott-webb-5IsdIqwwNP4-unsplash.jpg/48e67f33-a2d8-1f95-db81-ca49c416251e?version=1.0&t=1583394787977&download=true')
        cy.get(':nth-child(9) > .container > .row > :nth-child(2)').should("be.visible").and("not.be.empty").contains('01')
        cy.get(':nth-child(9) > .container > .row > :nth-child(3)').should("be.visible").and("not.be.empty").contains('02')
        cy.get(':nth-child(9) > .container > .row > :nth-child(4)').should("be.visible").and("not.be.empty").contains('03')
    })

    it('Checks Additional Services', function () {
        cy.get('.fr-twri_text-container > h3 > div').should("be.visible").contains('Additional Services')
        cy.get('.fr-twri_text-container > :nth-child(2)').should("be.visible").and("not.be.empty")
    })
});
