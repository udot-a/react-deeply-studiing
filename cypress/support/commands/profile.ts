export const updateProfile = () => {
  cy.getByTestId('ProfilePageHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstName').clear().type('new');
  cy.getByTestId('ProfileCard.lastName').clear().type('lastname');
  cy.getByTestId('ProfilePageHeader.SaveButton').click();
};

export const resetProfile = (profileId: string = '4') => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { authorization: `Bearer ${profileId}` },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 465,
      currency: 'EUR',
      country: 'Ukraine',
      city: 'Moscow',
      username: 'testuser',
      avatar:
        'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
  });
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      updateProfile(): Chainable<void>;
      resetProfile(profileId?: string): Chainable<void>;
    }
  }
}
