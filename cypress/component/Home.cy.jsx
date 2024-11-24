// Home.test.js
import React from 'react';
import { mount } from 'cypress/react18';
import Home from '../../src/pages/home/Home';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';

describe('Home Component', () => {
    beforeEach(() => {
        mount(
            <BrowserRouter>
                <AuthProvider>
                    <Home />
                </AuthProvider>
            </BrowserRouter>,
        );
    });

    it('renders the main sections correctly', () => {
        cy.get('.first-section').should('exist');
        cy.get('.second-section').should('exist');
        cy.get('.third-section').should('exist');
        cy.get('.about-us').should('exist');
    });

    it('displays the correct header text', () => {
        cy.get('.section-one-title').should('contain', 'Навчить грати на');
        cy.get('.typed_text').should('exist');
    });

    it('renders course information correctly', () => {
        cy.get('.course-thumbnail').should('be.visible');
        cy.get('.course-title').should('contain', 'З нуля до висот');
        cy.get('.final-price').should('contain', '999 гривень');
        cy.get('.prev-price').should('contain', '2999 гривень');
        cy.get('.discount-percent').should('contain', '70% знижка');
    });

    it('checks the Typed.js animation', () => {
        cy.get('.typed_text', { timeout: 10000 }).should('be.visible');
        cy.get('.typed_text').should('contain', 'за лічені місяці!');
        cy.get('.typed_text', { timeout: 10000 }).should('contain', 'з нами!');
    });

    it('renders instructor details', () => {
        cy.get('.instructor-title').should('contain', 'Твій викладач');
        cy.get('.name').should('contain', 'Василь Мись');
        cy.get('.designation').should('contain', 'Засновник, гітарист');
    });

    it('navigates to About page on instructor button click', () => {
        cy.get('.button-61').contains('Дізнатись більше').click();
        cy.url().should('include', '/about');
    });

    it('displays footer', () => {
        cy.get('footer').should('exist');
    });

    it('interacts with the "Відкривай знання для себе" button', () => {
        cy.get('.headerText a').contains('Відкривай знання для себе').should('exist');
    });
});
