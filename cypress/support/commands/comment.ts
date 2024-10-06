export const addComment = (text: string) => {
  cy.getByTestId('add-comment-form-input').type(text);
  cy.wait(1000);
  cy.getByTestId('add-comment-form-button').click();
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
    }
  }
}
