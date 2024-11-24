import React from 'react';
import About from '../../src/pages/about/About';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';
import { mount } from 'cypress/react18';

describe('About Page', () => {
    beforeEach(() => {
        mount(
            <BrowserRouter>
                <AuthProvider>
                    <About />
                </AuthProvider>
            </BrowserRouter>,
        );
    });

    it('renders the Navbar and Footer components', () => {
        cy.get('nav').should('exist');
        cy.get('footer').should('exist');
    });

    it('displays the instructor title', () => {
        cy.get('#instructor .title').should('contain', 'Зустрічайте свого').and('contain', 'Викладача');
    });

    it('renders the instructor section with image, name, and designation', () => {
        cy.get('.instructor-content .image-div img')
            .should('have.attr', 'src', '../../images/author.webp')
            .and('have.attr', 'alt', 'Василь Мись');

        cy.get('.name-div .name').should('contain', 'Василь Мись');
        cy.get('.name-div .designation').should('contain', 'Засновник GuitarLink');
    });

    it('displays the instructor description', () => {
        cy.get('.description-div .description').should(
            'contain',
            "Знайомтеся з Василем Мисем, талановитим гітаристом та викладачем, який має на меті поділитися своїм досвідом та любов'ю до музики з кожним охочим.",
        );
    });

    it('renders the decorative line under the title', () => {
        cy.get('.line-long').should('exist');
    });

    it('uses proper styling classes', () => {
        cy.get('div.dark').should('exist');
        cy.get('.about-us').should('have.class', 'font-sans text-center');
    });

    it('checks conditional rendering of instructor section', () => {
        cy.get('#instructor').should('exist');
        cy.get('#instructor .instructor-content').then(($content) => {
            if ($content.length > 0) {
                cy.get('.image-div img').should('exist');
            } else {
                cy.log('Instructor section not rendered');
            }
        });
    });

    it('verifies the instructor description contains highlighted text', () => {
        cy.get('.description-div .description span i').should('contain', 'Василем Мисем');
    });
});
