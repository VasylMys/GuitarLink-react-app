describe('Navbar Component Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the logo and basic navigation links', () => {
        cy.get('.logo img').should('have.attr', 'src', 'images/logo.webp');
        cy.get('.logo img').should('have.attr', 'alt', 'GuitarLink Logo');

        cy.get('.nav-links').should('not.have.class', 'open');
        cy.contains('Головна').should('be.visible');
        cy.contains("Зв'язок з нами").should('be.visible');
        cy.contains('Про нас').should('be.visible');
    });

    context('When user is not logged in', () => {
        beforeEach(() => {
            cy.intercept('GET', '/api/auth/user', { statusCode: 401 }).as('getUnauthenticatedUser');
            cy.visit('/');
        });

        it('should display login link', () => {
            cy.contains('Вхід').should('be.visible');
            cy.get('.logout-button').should('not.exist');
        });
    });

    context('When user is logged in', () => {
        beforeEach(() => {
            cy.login('john@example.com', '111111');
            cy.visit('/#/');
        });

        it('should log out the user when logout button is clicked', () => {
            cy.get('.logout-button').click();
            cy.contains('Вхід').should('be.visible');
        });
    });
});
