import React from 'react';
import AdvantageSection from '../../src/components/advantageSection/AdvantageSection';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';
import { mount } from 'cypress/react18';

describe('AdvantageSection Component', () => {
    beforeEach(() => {
        mount(
            <BrowserRouter>
                <AuthProvider>
                    <AdvantageSection />
                </AuthProvider>
            </BrowserRouter>,
        );
    });

    it('renders the section with the correct title and description', () => {
        cy.get('.advantage-section').should('exist').and('have.class', 'bg-dark');
        cy.get('.whycm-container h1').should('contain', 'Чому вибрати нас');
        cy.get('.whycm-container p').should('contain', 'Наші переваги, що роблять нас унікальними');
    });

    it('renders all advantage cards with correct images and descriptions', () => {
        const advantages = [
            { src: 'images/pocketFriendlyCourses.webp', desc: 'Доступні курси для всіх бюджетів' },
            { src: 'images/highQualityLectures.webp', desc: 'HD Відео та чистий звук' },
            { src: 'images/detailedExplanations.webp', desc: 'Детальні та зрозумілі пояснення' },
            { src: 'images/practiceProblems.webp', desc: "Практичні завдання з миттєвим зворотнім зв'язком" },
            { src: 'images/industryCurriculum.webp', desc: 'Курси, схвалені професіоналами галузі' },
            { src: 'images/lifetimeAccess.webp', desc: 'Довічний доступ, в будь-який час, будь-де' },
            { src: 'images/doubtSupport.webp', desc: 'Необмежена підтримка під час навчання' },
            { src: 'images/certificate.webp', desc: 'Сертифікат після завершення курсу' },
        ];

        cy.get('.adv-section .adv-card').should('have.length', advantages.length);

        advantages.forEach((advantage, index) => {
            cy.get('.adv-section .adv-card')
                .eq(index)
                .within(() => {
                    cy.get('img').should('have.attr', 'src', advantage.src);
                    cy.get('span').should('contain', advantage.desc);
                });
        });
    });

    it('applies proper styling classes to the cards', () => {
        cy.get('.adv-section .adv-card').each(($card) => {
            cy.wrap($card).should('have.class', 'adv-card');
            cy.wrap($card).find('span').should('have.class', 'adv-desc margin-0');
        });
    });
});
