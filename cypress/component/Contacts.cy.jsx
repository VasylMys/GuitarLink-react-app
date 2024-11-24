import React from 'react';
import Contact from '../../src/pages/contacts/Contacts';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';
import { mount } from 'cypress/react18';

describe('Contact Component', () => {
    beforeEach(() => {
        mount(
            <BrowserRouter>
                <AuthProvider>
                    <Contact />
                </AuthProvider>
            </BrowserRouter>,
        );
    });

    it('renders the navbar and footer components', () => {
        cy.get('nav').should('exist');
        cy.get('footer').should('exist');
    });

    it('displays the contact title and description', () => {
        cy.contains('h1', 'В один клік').should('be.visible');
        cy.contains('p', 'За допомогою цієї форми можете залишити свій відгук або запитати що потрібно.').should(
            'be.visible',
        );
    });

    it('renders all input fields with correct labels', () => {
        cy.get('#name').should('exist');
        cy.get('label[for="name"]').should('contain', "Ім'я");

        cy.get('#email').should('exist');
        cy.get('label[for="email"]').should('contain', 'Email');

        cy.get('#phone').should('exist');
        cy.get('label[for="phone"]').should('contain', 'Номер телефону');

        cy.get('#subject').should('exist');
        cy.get('label[for="subject"]').should('contain', 'Тема');

        cy.get('#message').should('exist');
        cy.get('label[for="message"]').should('contain', 'Повідомлення');
    });

    it('allows user to fill in the form fields', () => {
        cy.get('#name').type("Тестове Ім'я").should('have.value', "Тестове Ім'я");
        cy.get('#email').type('test@example.com').should('have.value', 'test@example.com');
        cy.get('#phone').type('123456789').should('have.value', '123456789');
        cy.get('#subject').type('Тестова тема').should('have.value', 'Тестова тема');
        cy.get('#message').type('Це тестове повідомлення.').should('have.value', 'Це тестове повідомлення.');
    });

    it('renders the submit button with correct text', () => {
        cy.get('.submit-btn a').should('contain', 'Підтвердити').and('have.attr', 'href', '#');
    });

    it('displays contact information correctly', () => {
        cy.contains('.social-contact p', 'Контактна інформація').should('be.visible');
        cy.contains('a', 'guitarlink@gmail.com').should('have.attr', 'href', 'mailto:guitarlink@gmail.com');
    });

    it('renders social media icons with correct links', () => {
        cy.get('.icons a').should('have.length', 2);

        cy.get('.icons a')
            .eq(0)
            .should('have.attr', 'href', 'https://www.youtube.com/')
            .and('have.attr', 'target', '_blank');
        cy.get('.icons a')
            .eq(1)
            .should('have.attr', 'href', 'https://www.instagram.com/')
            .and('have.attr', 'target', '_blank');
    });
});
