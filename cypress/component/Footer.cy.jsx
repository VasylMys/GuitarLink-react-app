import React from 'react';
import Footer from '../../src/components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';
import { mount } from 'cypress/react18';

describe('Footer Component', () => {
    beforeEach(() => {
        mount(
            <BrowserRouter>
                <AuthProvider>
                    <Footer />
                </AuthProvider>
            </BrowserRouter>,
        );
    });

    it('renders the footer element', () => {
        cy.get('footer').should('exist');
    });

    it('displays the logo with correct attributes', () => {
        cy.get('#footerLogo')
            .should('have.attr', 'src', '../../images/logo.webp')
            .and('have.attr', 'alt', 'Лого Гітарного Помічника');
    });

    it('renders the description text', () => {
        cy.get('.first .bottom .text-white').should(
            'contain',
            '«Гітарний Помічник» створено з метою надати доступне та високоякісне навчання грі на гітарі для всіх.',
        );
    });

    it('renders the copyright text', () => {
        cy.get('.copyright').should('contain', '©2024 Гітарний Помічник. Всі права захищені');
    });

    it('renders the social media section with icons', () => {
        cy.get('.third .top .social-icons a').should('have.length', 2);
        cy.get('.third .top .social-icons a').first().should('have.attr', 'href', 'https://www.instagram.com/');
        cy.get('.third .top .social-icons a').last().should('have.attr', 'href', 'https://www.youtube.com/');
    });

    it('displays the contact email with correct link', () => {
        cy.get('.third .bottom a').should('have.attr', 'href', 'mailto:support@guitarlink.com');
        cy.get('.third .bottom a').should('contain', 'support@guitarlink.com');
    });

    it('uses proper styling classes', () => {
        cy.get('.super-container').should('have.class', 'font-poppin');
        cy.get('.footer-container').should('exist');
    });

    it('renders all main sections of the footer', () => {
        cy.get('.first').should('exist');
        cy.get('.third').should('exist');
    });
});
