import ProfilePage from './ProfilePage';
import { renderComponent, RenderComponentOptions } from 'shared/lib/tests/componentRender/componentRender';
import { Profile, profileReducer } from 'enteties/Profile';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';


const profile: Profile = {
	id: '1',
	first: 'Andrii',
	last: 'Udot',
	city: 'Kharkiv',
	country: Country.Ukraine,
	currency: Currency.UAH,
	username: 'udot_a',
	age: 46,
};

const options: RenderComponentOptions = {
	initialState: {
		user: {
			authData: {
				id: '1',
				username: 'udot_a',
			},
		},
		profile: {
			isLoading: false,
			readonly: true,
			data: profile,
			form: profile,
		},
	},
	asyncReducers: {
		// @ts-ignore
		profile: profileReducer,
	},
};

describe('pages/ProfilePage', () => {
	test('The readonly mode should be switched', async () => {
		renderComponent(<ProfilePage />, options);
		await userEvent.click(screen.getByTestId('ProfilePageHeader.EditButton'));
		expect(screen.getByTestId('ProfilePageHeader.CancelButton')).toBeInTheDocument();
	});

	test('If cancel values set to empty', async () => {
		renderComponent(<ProfilePage />, options);
		await userEvent.click(screen.getByTestId('ProfilePageHeader.EditButton'));

		await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
		await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

		await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'first');
		await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'second');

		expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('first');

		await userEvent.click(screen.getByTestId('ProfilePageHeader.CancelButton'));

		expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('Andrii');
		expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('Udot');

	});

	test('The error should appear', async () => {
		renderComponent(<ProfilePage />, options);
		await userEvent.click(screen.getByTestId('ProfilePageHeader.EditButton'));

		await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

		await userEvent.click(screen.getByTestId('ProfilePageHeader.SaveButton'));

		expect(screen.getByTestId('Profile.Error.Paragraph')).toBeInTheDocument();
	});

	test('Should send PUT request to the server if always is OK', async () => {
		const mockPutReq = jest.spyOn($api, 'put');
		renderComponent(<ProfilePage />, options);
		await userEvent.click(screen.getByTestId('ProfilePageHeader.EditButton'));

		await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
		await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user test naming');

		await userEvent.click(screen.getByTestId('ProfilePageHeader.SaveButton'));

		expect(mockPutReq).toHaveBeenCalled();
	});
});
