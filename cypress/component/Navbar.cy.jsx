import React from 'react';
import Navbar from '../../src/components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';
import { mount } from 'cypress/react18';

describe('Navbar Component', () => {
    const renderNavbar = (user) => {
        cy.document().then((doc) => {
            const style = doc.createElement('style');
            style.innerHTML = `body { background-color: black; }`;
            doc.head.appendChild(style);
        });
        mount(
            <BrowserRouter>
                <AuthProvider testUser={user} testLogout={cy.stub}>
                    <Navbar />
                </AuthProvider>
            </BrowserRouter>,
        );
    };

    context('Unauthenticated user', () => {
        beforeEach(() => {
            renderNavbar(null);
        });

        it('renders the Navbar with links for unauthenticated user', () => {
            cy.get('.logo img').should('have.attr', 'alt', 'GuitarLink Logo');
            cy.get('.nav-links').should('not.have.class', 'open');
            cy.contains('Головна').should('exist');
            cy.contains("Зв'язок з нами").should('exist');
            cy.contains('Про нас').should('exist');
            cy.contains('Вхід').should('exist');
            cy.contains('Вийти').should('not.exist');
        });
    });

    context('Authenticated user', () => {
        beforeEach(() => {
            renderNavbar({ name: 'Вася' });
        });

        it('renders the Navbar with links for authenticated user', () => {
            cy.contains('Головна').should('exist');
            cy.contains("Зв'язок з нами").should('exist');
            cy.contains('Про нас').should('exist');
            cy.contains('Вхід').should('not.exist');
            cy.contains('Вийти').should('exist');
        });

        it('calls logout on clicking "Вийти"', () => {
            cy.contains('Вийти').click();
            cy.contains('Вхід').should('exist');
        });
    });
});
