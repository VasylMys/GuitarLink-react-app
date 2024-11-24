import React from 'react';
import SocialCardSection from '../../src/components/socialCardSection/SocialCardSection';
import { mount } from 'cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';

describe('SocialCardSection Component', () => {
    const mountWithAuth = (isAuthenticated = true) => {
        mount(
            <BrowserRouter>
                <AuthProvider value={{ isAuthenticated }}>
                    <SocialCardSection />
                </AuthProvider>
            </BrowserRouter>,
        );
    };

    it('should render the section with title and description', () => {
        mountWithAuth();
        cy.contains('Приєднуйтесь до нашої музичної спільноти').should('exist');
        cy.contains('Якщо хочете бути в курсі останніх новин, підписуйтеся на нас у соцмережах.').should('exist');
    });

    it('should render two social cards with correct links and images', () => {
        mountWithAuth();
        cy.get('.social-card').should('have.length', 2);

        cy.get('.social-card')
            .first()
            .within(() => {
                cy.get('a').should('have.attr', 'href', 'https://www.youtube.com/');
                cy.get('img').should('have.attr', 'src', 'images/youtube.webp');
                cy.contains('YouTube').should('exist');
            });

        cy.get('.social-card')
            .last()
            .within(() => {
                cy.get('a').should('have.attr', 'href', 'https://www.instagram.com/');
                cy.get('img').should('have.attr', 'src', 'images/instagram.webp');
                cy.contains('Instagram').should('exist');
            });
    });

    it('should render the social media section with correct styling', () => {
        mountWithAuth();
        cy.get('.social-section').should('have.class', 'bg-dark-light');
        cy.get('.social-card-section').should('have.css', 'display', 'flex');
        cy.get('.social-card-section').should('have.css', 'justify-content', 'center');
        cy.get('.social-card-section').should('have.css', 'align-items', 'center');
        cy.get('.social-card-section').should('have.css', 'flex-wrap', 'wrap');
    });

    it('should open the correct links in new tab', () => {
        mountWithAuth();
        cy.get('.social-card').first().find('a').should('have.attr', 'target', '_blank');
        cy.get('.social-card').last().find('a').should('have.attr', 'target', '_blank');
    });

    it('should render social media section for authenticated user', () => {
        mountWithAuth(true);
        cy.get('.social-card').should('have.length', 2);
    });

    it('should render social media section for unauthenticated user', () => {
        mountWithAuth(false);
        cy.get('.social-card').should('have.length', 2);
    });
});
