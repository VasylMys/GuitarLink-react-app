describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('#/login');
    });

    it('displays the login form', () => {
        cy.get('.login-title').should('contain.text', 'Увійдіть');
        cy.get('input#email').should('be.visible');
        cy.get('input#password').should('be.visible');
        cy.get('input#submit').should('be.visible');
    });

    it('allows the user to input email and password', () => {
        cy.get('input#email').type('user@example.com');
        cy.get('input#password').type('password123');
        cy.get('input#submit').should('not.be.disabled');
    });

    it('displays the loading text when submitting the form', () => {
        cy.intercept('POST', '/login', { delayMs: 1000 }).as('loginRequest');

        cy.get('input#email').type('user@example.com');
        cy.get('input#password').type('password123');
        cy.get('form').submit();

        cy.get('input#submit').should('have.value', 'Завантаження...');
    });

    it('shows error message on failed login', () => {
        cy.get('input#email').type('invalid@example.com');
        cy.get('input#password').type('wrongpassword');
        cy.get('form').submit();

        cy.get('p').should('contain.text', 'Увійдітьщоб почати навчанняFirebase: Error (auth/invalid-credential).');
    });

    it('redirects to the homepage on successful login', () => {
        cy.get('input#email').type('john@example.com');
        cy.get('input#password').type('111111');
        cy.get('form').submit();

        cy.url().should('include', '/');
    });

    it('redirects to register page when clicking "Немає акаунта?"', () => {
        cy.get('.register').click();
        cy.url().should('include', '/register');
    });
});
