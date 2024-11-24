describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should load the page and display correct elements', () => {
        cy.get('.typed_text').should('exist');
        cy.get('.typed_text').should('have.text', 'за лічені місяці!');

        cy.get('.section-one-title').should('contain.text', 'Навчить грати на');
        cy.get('.headerText').should('contain.text', 'Розблокуй свій гітарний потенціал');

        cy.get('#count1').should('have.text', '100,000+');
        cy.get('#count2').should('have.text', '150+');

        cy.get('.third-section-title').should('contain.text', 'Що ти б хотів вивчити?');

        cy.get('.card').should('be.visible');
        cy.get('.course-title').should('contain.text', 'З нуля до висот');
        cy.get('.final-price').should('contain.text', '999 гривень');
        cy.get('.discount-percent').should('contain.text', '70% знижка');

        cy.get('.instructor-title').should('contain.text', 'Твій викладач');
        cy.get('.button-61').should('exist');

        cy.get('footer').should('be.visible');
    });

    it('should animate the count numbers correctly', () => {
        cy.wait(5000);
        cy.get('#count1').should('have.text', '100,000+');
        cy.get('#count2').should('have.text', '150+');
    });

    it('should navigate to the about page when clicking "Дізнатись більше"', () => {
        cy.get('.button-61').click();
        cy.url().should('include', '/about');
    });

    it('should display social cards section correctly', () => {
        cy.get('.social-card-section').should('be.visible');
    });

    it('should have correct image alt text for accessibility', () => {
        cy.get('img[alt="A Boy Working on Laptop"]').should('exist');
        cy.get('img[alt="Василь Мись"]').should('exist');
    });

    // New tests for increasing coverage
    it('should check the header navigation links', () => {
        cy.get('nav').within(() => {
            cy.get('a').should('have.length.greaterThan', 0); // Ensure there are navigation links
            cy.get('a').each((link) => {
                cy.wrap(link).should('have.attr', 'href').and('not.be.empty'); // Validate href
            });
        });
    });

    it('should validate card click functionality', () => {
        cy.get('.card').first().click(); // Click on the first card
        cy.url().should('include', '/#'); // Assumes clicking a card navigates to a course page
    });

    it('should validate the footer contains correct links', () => {
        cy.get('footer a').should('have.length.greaterThan', 0); // Check links in the footer
        cy.get('footer a').each((link) => {
            cy.wrap(link).should('have.attr', 'href').and('not.be.empty'); // Validate href
        });
    });

    it('should test button hover effects', () => {
        cy.get('.button-61').trigger('mouseover');
        cy.get('.button-61').should('have.css', 'background-color', 'rgb(255, 46, 99)'); // Example color
    });

    it('should ensure responsiveness for different screen sizes', () => {
        cy.viewport('iphone-6');
        cy.get('.headerText').should('be.visible'); // Check visibility on smaller screens

        cy.viewport('macbook-15');
        cy.get('.headerText').should('be.visible'); // Check visibility on larger screens
    });
});
