describe('Footer Component', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should render the footer logo with correct alt text', () => {
        cy.get('#footerLogo').should('be.visible').and('have.attr', 'alt', 'Лого Гітарного Помічника');
    });

    it('should display the correct copyright text', () => {
        cy.get('.copyright').should('have.text', '©2024 Гітарний Помічник. Всі права захищені');
    });

    it('should render the correct social media links with the correct URLs', () => {
        cy.get('a[href="https://www.instagram.com/"]')
            .should('have.attr', 'href', 'https://www.instagram.com/')
            .and('have.attr', 'target', '_blank');

        cy.get('a[href="https://www.youtube.com/"]')
            .should('have.attr', 'href', 'https://www.youtube.com/')
            .and('have.attr', 'target', '_blank');
    });

    it('should render the correct contact email', () => {
        cy.get('a[href="mailto:support@guitarlink.com"]')
            .should('have.attr', 'href', 'mailto:support@guitarlink.com')
            .and('have.text', 'support@guitarlink.com');
    });

    it('should have visible social media icons', () => {
        cy.get('.social-icons svg')
            .should('have.length', 2)
            .each(($icon) => {
                cy.wrap($icon).should('be.visible');
            });
    });

    it('should have the correct footer text', () => {
        cy.get('.footer-container .first .bottom p').should(
            'have.text',
            '«Гітарний Помічник» створено з метою надати доступне та високоякісне навчання грі на гітарі для всіх. Ми прагнемо запропонувати наші курси з найкращим контентом за доступними цінами та довічним доступом.©2024 Гітарний Помічник. Всі права захищені',
        );
    });
});
