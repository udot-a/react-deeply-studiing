import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
	describe('User is non-authorized', () => {
		it('Redirect to Main Page', () => {
			cy.visit('/');
			cy.get(selectByTestId('main-page')).should('exist');
		});
		it('Redirect to Profile Page', () => {
			cy.visit('/profile/1');
			cy.get(selectByTestId('main-page')).should('exist');
		});
		it('User inputs unexisting route', () => {
			cy.visit('/profiaasdasd');
			cy.get(selectByTestId('not-found-page')).should('exist');
		});
	});

	describe('User is authorized', () => {
		beforeEach( () => {
			cy.login('admin', '123');
		});

		it('Redirect to Profile Page', () => {
			cy.visit('/profile/1');
			cy.get(selectByTestId('profile-page')).should('exist');
		});

		it('Redirect to Articles Page', () => {
			cy.visit('/articles');
			cy.get(selectByTestId('articles-page')).should('exist');
		});
	});
});
