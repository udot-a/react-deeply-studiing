describe('User goes to the Profile Page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile();
  });
  it('And Profile Page is successfully loaded', () => {
    cy.getByTestId('ProfileCard.firstName').should('have.value', 'test');
  });
  it('And Profile Page is successfully edited', () => {
    cy.updateProfile();
    cy.getByTestId('ProfileCard.firstName').should('have.value', 'new');
    cy.getByTestId('ProfileCard.lastName').should('have.value', 'lastname');
  });
});
export {};
