import { Article } from '../../../src/enteties/Article';

const defaultArticle: Article =  {
	'title': 'Python news',
	'subtitle': 'Что нового в JS за 2022 год?',
	'img': 'https://zsfond.ru/wp-content/uploads/2021/03/piton-1-1024x578.jpg',
	'views': 1022,
	'createdAt': '26.02.2024',
	'userId': '4',
	'type': [
		// @ts-ignore
		'IT'
	],
	'blocks': []
};
export const createArticle = (article: Article) => {
	return cy.request({
		method: 'POST',
		url: 'http://localhost:8000/articles',
		headers: { authorization: 'Bearer' },
		body: article ?? defaultArticle,
	}).then(({ body }) => {
		return body;
	});
};

export const removeArticle = (articleId: string = '44') => {

	return cy.request({
		method: 'PUT',
		url: `http://localhost:8000/articles/${articleId}`,
		headers: { authorization: 'Bearer }' },
	});
};

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			createArticle(article?: Article): Chainable<Article>;
			removeArticle(articleId?: string): Chainable<void>;
		}
	}
}
