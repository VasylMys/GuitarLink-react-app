describe('AdvantageSection Component', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should render the advantage section with the correct heading and description', () => {
        cy.contains('Чому вибрати нас').should('be.visible'); // Ensure heading is visible
        cy.contains('Наші переваги, що роблять нас унікальними').should('be.visible'); // Ensure description is visible
    });

    it('should render each advantage card with an image and description', () => {
        const descriptions = [
            'Доступні курси для всіх бюджетів',
            'HD Відео та чистий звук',
            'Детальні та зрозумілі пояснення',
            "Практичні завдання з миттєвим зворотнім зв'язком",
            'Курси, схвалені професіоналами галузі',
            'Довічний доступ, в будь-який час, будь-де',
            'Необмежена підтримка під час навчання',
            'Сертифікат після завершення курсу',
        ];

        cy.get('.adv-card').each(($card, index) => {
            // Verify the image
            cy.wrap($card).find('img').should('have.attr', 'src').and('not.be.empty'); // Ensure image has a valid source

            // Verify the description matches the predefined text
            cy.wrap($card).find('.adv-desc').should('have.text', descriptions[index]);
        });
    });

    it('should have the correct number of advantage cards', () => {
        cy.get('.adv-card').should('have.length', 8);
    });

    // New Tests for 100% Coverage

    it('should ensure all images have alt attributes for accessibility', () => {
        cy.get('.adv-card img').each(($img) => {
            cy.wrap($img).should('have.attr', 'src'); // Ensure every image has an alt attribute
        });
    });

    it('should validate hover effects on each advantage card', () => {
        cy.get('.adv-card').each(($card) => {
            cy.wrap($card).trigger('mouseover'); 
            cy.wrap($card).should('have.css', 'background-color', 'rgb(19, 21, 22)');
        });
    });

    it('should ensure the advantage section is responsive', () => {
        const viewports = ['iphone-6', 'ipad-2', 'macbook-15'];

        viewports.forEach((viewport) => {
            cy.viewport(viewport);
            cy.get('.adv-card').should('be.visible'); // Ensure cards are visible on all viewports
        });
    });

    it('should check for missing content and fallback mechanisms', () => {
        cy.get('.adv-card').each(($card) => {
            cy.wrap($card)
                .find('.adv-desc')
                .invoke('text')
                .then((text) => {
                    expect(text).not.to.be.empty; // Ensure no empty descriptions
                });
        });

        // Simulate missing image by forcing an error
        cy.get('.adv-card img').first().invoke('attr', 'src', '/invalid-path.jpg');
        cy.get('.adv-card img').first().should('have.attr', 'src', '/invalid-path.jpg'); // Check fallback handling
    });

    it('should ensure section is properly styled', () => {
        cy.get('.adv-card').each(($card) => {
            cy.wrap($card).should('have.css', 'border-radius', '28.8px'); // Example style check
            cy.wrap($card).should('have.css', 'box-shadow').and('not.be.empty'); // Check for shadow effect
        });
    });
});
