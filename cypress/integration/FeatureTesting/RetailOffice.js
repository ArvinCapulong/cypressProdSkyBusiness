/// <reference types = "cypress" />

describe('Your Business: Retail & Office', function(){
    it('Checks Retail & Office asset, title', function(){
        cy.visit('/retail-office')
        cy.title().should('eq', 'Retail & Office - Sky Business - Sky New Zealand')
        cy.url().should('eq', 'https://prod.skybusiness.co.nz/retail-office')
        cy.location().should((location) => {
            expect(location.protocol).to.eq('https:')
        })
    })
})

describe('Your Business: Retail & Office', function(){
    it('Check main banner, Phone number, image', function(){
        cy.get('#fragment-30440-mavy > div > div > div.fr-banner__content-container > h2 > div').should('be.visible').contains('Retail & Office')
        cy.get('.fr-banner__content-container > h3 > div').should('be.visible').contains('Call 0800 759 333')
        cy.get('.fr-banner__image').should('be.visible').and('have.attr', 'src', '/documents/20315/38837/louis-hansel-wVoP_Q2Bg_A-unsplash.jpg/e070b0e0-7721-63c0-46e0-8e47de73f4b6?version=1.0&t=1583394783894&download=true')
    })
})

describe('Your Business: Retail & Office', function(){
    it('Check contents: images, text.', function(){
        cy.get('.fr-heading-bs-3 > .fr-heading-text-color-midnight > div').should('be.visible').contains('welcoming and informed environment')
        cy.get('#fragment-21754-ptaf > .fr-paragraph > div > p').should('be.visible').contains('range of News channels, SKY Sports and an extensive choice')
        cy.get('.w-100').should('be.visible').and('have.attr', 'src', '/documents/20315/38837/jovaughn-stephens-IuT4XqfabPs-unsplash.jpg/93eba62f-24ed-e474-02e9-fa183f20c303?version=1.0&t=1583394781285&download=true')
        cy.get('#fragment-21754-adsq > .fr-paragraph > div').should('be.visible').contains('01 Keep everyone up to date')
        cy.get('#fragment-21754-jfkf > .fr-paragraph > div').should('be.visible').contains('02 Boost morale')
        cy.get('#fragment-21754-idcf > .fr-paragraph > div').should('be.visible').contains('03 Encourage productivity')

    })
})

describe('Your Business: Retail & Office', function(){
    it('Check contents: Additional Services', function(){
        cy.get('.fr-twri_text-container > h3 > div').should('be.visible').contains('Additional Services')
        cy.get('.fr-twri_text-container > :nth-child(2) > a').should('be.visible').contains('Find out more').and('have.attr', 'href', '/additional-services')
        cy.get('.fr-card__image').should('be.visible').and('have.attr', 'src', '/documents/20315/38837/bogomil-mihaylov-ekHSHvgr27k-unsplash.jpg/81384f27-004b-dd41-c2b7-0c5e2d42c3f9?version=1.0&t=1583394772367&download=true')
    })
})