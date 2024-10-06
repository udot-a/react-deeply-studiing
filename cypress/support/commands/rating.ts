export const setRate = (
  startCount: number = 5,
  feedback: string = 'feedback',
) => {
  cy.getByTestId(`star-rating-${startCount}`).click();
  cy.wait(1000);
  cy.getByTestId('feedback-input').type(feedback);
  cy.getByTestId('rating-send-button').click();
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      setRate(startCount: number, feedback: string): Chainable<void>;
    }
  }
}
