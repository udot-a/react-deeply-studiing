import { ArticleDetails } from '@/enteties/Article';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

describe('Article.cy.tsx', () => {
	it('playground', () => {
		cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
		cy.mount(
			<TestProvider>
				<ArticleDetails id="7" />
			</TestProvider>);
	});
});
