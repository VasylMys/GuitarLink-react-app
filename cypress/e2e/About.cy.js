describe('About Page', () => {
    beforeEach(() => {
        cy.visit('#/about');
    });

    it('should load the page and display the instructor section', () => {
        cy.get('.instructor-title').contains('Зустрічайте свого Викладача');
        cy.get('.image-div img').should('have.attr', 'src').and('include', 'author.webp');
        cy.get('.name-div .name').contains('Василь Мись');
        cy.get('.name-div .designation').contains('Засновник GuitarLink');
        cy.get('.description-div .description')
            .contains('Знайомтеся з Василем Мисем')
            .and('contain', 'талановитим гітаристом та викладачем');
        cy.get('.line-long').should('be.visible');
    });

    it('should render the Navbar and Footer components', () => {
        cy.get('nav').should('exist');
        cy.get('footer').should('exist');
    });

    it('should have the correct styling', () => {
        cy.get('div.dark').should('have.class', 'dark');
        cy.get('#instructor').should('have.class', 'font-sans');
    });
});
