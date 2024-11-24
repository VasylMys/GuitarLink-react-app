describe('SocialCardSection Component', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the social section', () => {
        cy.get('.social-section').should('exist');

        cy.get('.social-title').should('contain.text', 'Приєднуйтесь до нашої музичної спільноти');
        cy.get('.social-desc').should(
            'contain.text',
            'Якщо хочете бути в курсі останніх новин, підписуйтеся на нас у соцмережах.',
        );
    });

    it('should display social media cards with correct links', () => {
        cy.get('.social-card').should('have.length', 2);

        cy.get('.social-card').eq(0).find('a').should('have.attr', 'href', 'https://www.youtube.com/');
        cy.get('.social-card').eq(0).find('img').should('have.attr', 'src').and('include', 'youtube.webp');

        cy.get('.social-card').eq(1).find('a').should('have.attr', 'href', 'https://www.instagram.com/');
        cy.get('.social-card').eq(1).find('img').should('have.attr', 'src').and('include', 'instagram.webp');
    });

    it('should call the correct link when clicked', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        cy.get('.social-card').eq(0).find('a').first().click();

        cy.get('.social-card').eq(1).find('a').first().click();
    });
});
