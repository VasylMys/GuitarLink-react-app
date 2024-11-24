// Login.test.js
import React from 'react';
import { mount } from 'cypress/react18';
import Login from '../../src/pages/login/Login';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';

describe('Login Component', () => {
    beforeEach(() => {
        mount(
            <BrowserRouter>
                <AuthProvider>
                    <Login />
                </AuthProvider>
            </BrowserRouter>,
        );
    });

    it('renders the component correctly', () => {
        cy.get('.login-title').should('contain', 'Увійдіть');
        cy.get('.login-subtitle').should('contain', 'щоб почати навчання');
        cy.get('label[for="email"]').should('contain', 'Email');
        cy.get('label[for="password"]').should('contain', 'Пароль');
        cy.get('.register').should('contain', 'Немає акаунта?');
        cy.get('#submit').should('have.value', 'Увійти');
    });

    it('allows user to input email and password', () => {
        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="email"]').should('have.value', 'test@example.com');

        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="password"]').should('have.value', 'password123');
    });

    it('disables submit button and shows loading text when loading', () => {
        cy.intercept('POST', '/login', { delay: 500, statusCode: 200 }).as('loginRequest');

        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('#submit').click();

        cy.get('#submit').should('be.disabled').and('have.value', 'Завантаження...');
    });

    it('displays an error message when login fails', () => {
        cy.intercept('POST', '/login', {
            statusCode: 401,
            body: { error: 'Invalid credentials' },
        }).as('loginRequest');

        cy.get('input[name="email"]').type('wrong@example.com');
        cy.get('input[name="password"]').type('wrongpassword');
        cy.get('#submit').click();

        cy.contains('Вийти');
    });

    it('navigates to the register page when clicking "Немає акаунта?"', () => {
        cy.get('.register').click();
        cy.url().should('include', '/register');
    });
});
