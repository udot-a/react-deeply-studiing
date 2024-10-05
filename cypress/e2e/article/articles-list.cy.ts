describe('Articles List Page', () => {
	beforeEach(() => {
		cy.login().then(() => {
			cy.visit('articles');
		});
	});

	it('Should be Article List and at least 3 List Items', () => {
		cy.getByTestId('articles-list').should('exist');
		cy.getByTestId('articles-list-item').should('have.length.greaterThan', 3);
	});

	it('Articles loads from fixtures', () => {
		cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
		cy.getByTestId('articles-list').should('exist');
		cy.getByTestId('articles-list-item').should('have.length.greaterThan', 3);
	});

	it.skip('Example of skipped test', () => {
		cy.getByTestId('asdsada-list').should('exist');
	});
});

export {};
