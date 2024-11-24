describe('Contact Page', () => {
    beforeEach(() => {
        cy.visit('/contacts#/contacts');
    });

    it('should display the navbar and footer', () => {
        cy.get('nav').should('exist');
    });

    it('should display the contact form and its fields', () => {
        cy.get('.contact-form').should('exist');
        cy.get('#name').should('exist');
        cy.get('#email').should('exist');
        cy.get('#phone').should('exist');
        cy.get('#subject').should('exist');
        cy.get('#message').should('exist');
    });

    it('should fill out and submit the form successfully', () => {
        cy.get('#name').type('John Doe');
        cy.get('#email').type('johndoe@example.com');
        cy.get('#phone').type('123456789');
        cy.get('#subject').type('Inquiry');
        cy.get('#message').type('I would like to know more about your services.');

        cy.get('.submit-btn a').click();
        cy.url().should('include', '/');
    });

    it('should display social media links', () => {
        cy.get('.icons a').should('have.length', 2);
        cy.get('.icons a').first().should('have.attr', 'href', 'https://www.youtube.com/');
        cy.get('.icons a').last().should('have.attr', 'href', 'https://www.instagram.com/');
    });
});
