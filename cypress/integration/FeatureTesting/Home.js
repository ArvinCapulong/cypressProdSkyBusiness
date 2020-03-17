/// <reference types = "cypress" />

describe('Production SKY Business Site', function(){
    it('Checks Homepage asset, title', function(){
        cy.visit('/')
        cy.title().should('eq', 'Home - Sky Business - Sky New Zealand')
        cy.url().should('eq', 'https://prod.skybusiness.co.nz/')

        cy.location().should((location) => {
            expect(location.protocol).to.eq('https:')
        })

        cy.get('.hide-desktop > .logo-link > .mr-2')
        .should('be.visible').and('have.attr', 'src', 'https://prod.skybusiness.co.nz/o/skybusiness-theme/images/logo//logo-dark.png')

        cy.get('div[id="navbar_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet"] >ul >li:nth-child(1) >a >span')
        .should('be.visible').contains('Your Business')

        cy.get('div[id="navbar_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet"] >ul >li:nth-child(2)>a >span')
        .should('be.visible').contains('Sky Services')
        
        cy.get('div[id="navbar_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet"] >ul >li:nth-child(3)>a >span')
        .should('be.visible').contains('Promotion')

        cy.get('div[id="navbar_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet"] >ul >li:nth-child(4)>a >span')
        .should('be.visible').contains('Support')

        cy.get('div[class="call"] >a').should('be.visible').contains('Call 0800 759 333')

        
        cy.get('.fr-banner__image').should('have.attr', 'src').should('include','Golf-Image.jpg/a879f588-b862-4fe9-5bb7-e1261f37a22e?version=1.0&t=1583283595544&download=true')
        cy.get('h2 > div').should('be.visible').contains('An incredible,', 'packages')
        cy.get('.fr-banner__content-container > h3 > div').should('be.visible').contains('Call')

        // cy.get('#hero-scroll > a > span').click()
        cy.wait(1000)
        cy.scrollTo(0, 800)

        cy.get('.fr-heading-bs-4 > .fr-heading-text-color-midnight > div').should('be.visible').contains('Your Industry')
        cy.get('#fragment-21754-ptaf > .fr-paragraph > div').should('be.visible').contains('guests or music solutions for your store, we have a solution for your business.')

        cy.get('#fr-card-pbtu-link > :nth-child(2) > :nth-child(1) > .fr-card__image')
        .should('be.visible')
        cy.get('#fr-card-pbtu-link > .title-overlay').should('be.visible').contains('Retail & Office')

        cy.get('#fr-card-ohlt-link > :nth-child(2) > :nth-child(1) > .fr-card__image')
        .should('be.visible')
        cy.get('#fr-card-ohlt-link > .title-overlay').should('be.visible').contains('Hotels & Motels')
        
        cy.get('#fr-card-efaw-link > :nth-child(2) > :nth-child(1) > .fr-card__image')
        .should('be.visible')
        cy.get('#fr-card-efaw-link > .title-overlay').should('be.visible').contains('Gyms')
        
        cy.get('#fr-card-pqyc-link > :nth-child(2) > :nth-child(1) > .fr-card__image')
        .should('be.visible')
        cy.get('#fr-card-pqyc-link > .title-overlay').should('be.visible').contains('Pubs & Clubs')

        cy.get('#fr-card-ynzd-link > :nth-child(2) > :nth-child(1) > .fr-card__image')
        .should('be.visible')
        cy.get('#fr-card-ynzd-link > .title-overlay').should('be.visible').contains('Aged Care')

        cy.wait(1000)
        cy.scrollTo(0, 1900)

    
        cy.get('.bg-white > .container > :nth-child(1) > :nth-child(1)').should('be.visible')
        cy.get('#fragment-21755-nfzf > .fr-heading > .fr-heading-bs-0 > .fr-heading-text-color-midnight > div')
        .should('be.visible').contains('Contact Us')
        cy.get('#fragment-21754-bihj > .fr-paragraph > div').should('be.visible').contains('Talk to us about the right')

        cy.get('#fragment-21755-onbb > .fr-heading > .fr-heading-bs-0 > .fr-heading-text-color-midnight > div')
        .should('be.visible').contains('Email')
        cy.get('#fragment-21754-cihg > .fr-paragraph > div').should('be.visible').contains('skybusiness@skytv.co.nz')

        cy.get('#fragment-21755-ruis > .fr-heading > .fr-heading-bs-0 > .fr-heading-text-color-midnight > div')
        .should('be.visible').contains('Phone & Fax')
        cy.get('#fragment-21754-orvo > .fr-paragraph > div').should('be.visible').contains('Fax: +64 9 525 8386')

        cy.get('#fragment-21755-mffs > .fr-heading > .fr-heading-bs-0 > .fr-heading-text-color-midnight > div')
        .should('be.visible').contains('Physical Address')
        cy.get('#fragment-21754-ijrl > .fr-paragraph > div').should('be.visible').contains('10 Panorama')

        cy.get('#fragment-21755-mofi > .fr-heading > .fr-heading-bs-0 > .fr-heading-text-color-midnight > div')
        .should('be.visible').contains('Postal Address')
        cy.get('#fragment-21754-aaaz > .fr-paragraph > div').should('be.visible').contains('PO Box')

        cy.wait(1000)
        cy.scrollTo(0, 2500)

   
        cy.get('div[id="navbar_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_INSTANCE_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_footer"] >ul >li:nth-child(1) >a >span')
        .should('be.visible').contains('Content Protection')

        cy.get('div[id="navbar_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_INSTANCE_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_footer"] >ul >li:nth-child(2) >a >span')
        .should('be.visible').contains('Terms of Use')

        cy.get('div[id="navbar_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_INSTANCE_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_footer"] >ul >li:nth-child(3) >a >span')
        .should('be.visible').contains('Commercial Terms')

        cy.get('div[id="navbar_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_INSTANCE_portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_footer"] >ul >li:nth-child(4) >a >span')
        .should('be.visible').contains('Privacy Policy')
        



        
    })
})

