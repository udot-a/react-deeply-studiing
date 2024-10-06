let articleId = '';

describe('Article Details Page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((data) => {
      articleId = data.id;
      cy.visit(`articles/${data.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(articleId);
  });

  it('The Article was loaded successfully', () => {
    cy.getByTestId('article-details-page');
  });
  it('The List of Recommendation exists', () => {
    cy.getByTestId('article-recommendations-list');
  });
  it('User successfully left comment', () => {
    cy.getByTestId('article-details-page');
    cy.getByTestId('add-comment-form').scrollIntoView();
    cy.addComment('text');
    cy.wait(1000);
    cy.getByTestId('comment-card').should('have.length', 1);
  });
  it('User left feedback', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.wait(1000);
    cy.getByTestId('article-details-page');
    cy.getByTestId('rating-card').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.wait(1000);
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});

export {};
