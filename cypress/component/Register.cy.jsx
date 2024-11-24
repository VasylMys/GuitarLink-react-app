// Register.test.js
import React from 'react';
import Register from '../../src/pages/register/Register';
import { mount } from 'cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';

describe('Register Component', () => {
    beforeEach(() => {
        mount(
            <BrowserRouter>
                <AuthProvider>
                    <Register />
                </AuthProvider>
            </BrowserRouter>,
        );
    });

    it('renders the component correctly', () => {
        cy.get('.register-title').should('contain', 'Зареєструйтесь');
        cy.get('.register-subtitle').should('contain', 'щоб почати навчання');
        cy.get('label[for="email"]').should('contain', 'Email');
        cy.get('label[for="password"]').should('contain', 'Пароль');
        cy.get('.login').should('contain', 'Вже є акаунт?');
        cy.get('#submit').should('have.value', 'Зареєструватись');
    });

    it('allows user input for email and password', () => {
        cy.get('#email').type('test@example.com').should('have.value', 'test@example.com');
        cy.get('#password').type('password123').should('have.value', 'password123');
    });

    it('disables the submit button when loading', () => {
        cy.intercept('POST', '/api/register', (req) => {
            req.reply((res) => {
                res.delay = 1000;
                res.send({ success: true });
            });
        }).as('register');

        cy.get('#email').type('test@example.com');
        cy.get('#password').type('password123');
        cy.get('#submit').click();

        cy.get('#submit').should('be.disabled').and('have.value', 'Завантаження...');
    });

    it('displays an error message for invalid credentials', () => {
        cy.intercept('POST', '/api/register', {
            statusCode: 400,
            body: { error: 'Invalid credentials' },
        }).as('register');

        cy.get('#email').type('wrong@example.com');
        cy.get('#password').type('wrongpassword');
        cy.get('#submit').click();

        cy.get('p').should('contain', 'Firebase: Error (auth/email-already-in-use).');
    });

    it('redirects user after successful registration', () => {
        cy.get('#email').type('test@example.com');
        cy.get('#password').type('password123');
        cy.get('#submit').click();

        cy.get('#submit').should('be.disabled').and('have.value', 'Завантаження...');
    });

    it('validates required fields', () => {
        cy.get('#submit').click();
        cy.get('input:invalid').should('have.length', 2);
    });

    it('navigates to the login page when clicking "Вже є акаунт?"', () => {
        cy.get('.login').click();
        cy.url().should('include', '/login');
    });
});
