describe('Register Page', () => {
    beforeEach(() => {
        cy.visit('#/register');
    });

    it('displays the registration form', () => {
        cy.get('.register-title').should('contain.text', 'Зареєструйтесь');
        cy.get('input#email').should('be.visible');
        cy.get('input#password').should('be.visible');
        cy.get('input#submit').should('be.visible');
    });

    it('allows the user to input email and password', () => {
        cy.get('input#email').type('newuser@example.com');
        cy.get('input#password').type('newpassword123');
        cy.get('input#submit').should('not.be.disabled');
    });

    it('displays the loading text when submitting the form', () => {
        cy.intercept('POST', '/register', { delayMs: 1000 }).as('registerRequest');

        cy.get('input#email').type('newuser@example.com');
        cy.get('input#password').type('newpassword123');
        cy.get('form').submit();

        cy.get('input#submit').should('have.value', 'Завантаження...');
    });

    it('shows error message on failed registration', () => {
        cy.get('input#email').type('john@example.com');
        cy.get('input#password').type('111111');
        cy.get('#submit').click();

        cy.get('p').should(
            'contain.text',
            'Зареєструйтесьщоб почати навчанняFirebase: Error (auth/email-already-in-use).',
        );
    });

    it('redirects to the login page when registration is successful', () => {
        cy.get('input#email').type('john1@example.com');
        cy.get('input#password').type('111111');
        cy.get('#submit').click();

        cy.url().should('include', '/');
    });

    it('redirects to login page when clicking "Вже є акаунт?"', () => {
        cy.get('.login').click();
        cy.url().should('include', '/login');
    });
});
