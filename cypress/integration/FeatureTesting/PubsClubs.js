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

    it('Checks main image, header, phone number', function () {
        cy.get('.fr-banner__image').should("be.visible").and("have.attr", 'src', '/documents/20315/38837/adam-jaime-dmkmrNptMpw-unsplash.jpg/3b1b2c34-1b92-df05-077e-41cb4e353327?version=1.0&t=1583394798029&download=true')
        cy.get('h2 > div').should("be.visible").and("not.be.empty").contains('Pubs & Clubs')
        cy.get('.fr-banner__content-container > h3 > div').should("be.visible").and("not.be.empty").contains('Call 0800 759 333')
    })

    it('Checks first paragraph header and text', function () {
        cy.get('.fr-heading-bs-3 > .fr-heading-text-color-midnight > div').should("be.visible").and("not.be.empty")
        cy.get('.fr-paragraph > div > p').should("be.visible").and("not.be.empty")
    })

    it('Checks secondary image and numbered list', function () {
        cy.get('.w-100').should("be.visible").and("have.attr", 'src', '/documents/20315/38837/louis-hansel-shotsoflouis-vI7pDreQLl4-unsplash.jpg/9cf99164-df89-31c0-757f-d27807584dee?version=1.0&t=1583394782861&download=true')
        cy.get(':nth-child(9) > .container > .row > :nth-child(2)').should("be.visible").and("not.be.empty").contains('01')
        cy.get(':nth-child(9) > .container > .row > :nth-child(3)').should("be.visible").and("not.be.empty").contains('02')
        cy.get(':nth-child(9) > .container > .row > :nth-child(4)').should("be.visible").and("not.be.empty").contains('03')
    })

    it('Checks Signage', function () {
        cy.get('.fr-twri_text-container > h3 > div').should("be.visible").and("not.be.empty").contains('Signage')
        cy.get(':nth-child(2) > p').should("be.visible").and("not.be.empty")
        cy.get('p > a').should("be.visible").and("have.attr", 'href', '/signage')
    })


});
