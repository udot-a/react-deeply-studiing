import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';

describe('getProfileForm.test', () => {
	test('should be equal to {\n' +
    '\t\t\t\'first\': \'Andrii\',\n' +
    '\t\t\t\'last\': \'Udot\',\n' +
    '\t\t\t\'age\': 45,\n' +
    '\t\t\t\'city\': \'Kharkiv\',\n' +
    '\t\t\t\'country\': Country.Britain,\n' +
    '\t\t\t\'currency\': Currency.USD,\n' +
    '\t\t}', () => {
		const form = {
			'first': 'Andrii',
			'last': 'Udot',
			'age': 45,
			'city': 'Kharkiv',
			'country': Country.Britain,
			'currency': Currency.USD,
		};

		const state: DeepPartial<StateSchema> = {
			profile: {
				form,
			},
		};
		expect(getProfileForm(state as StateSchema)).toEqual(form);
	});

	test('should work with empty state', () => {
		const emptyState: DeepPartial<StateSchema> = {};

		expect(getProfileForm(emptyState as StateSchema)).toEqual(undefined);
	});
});