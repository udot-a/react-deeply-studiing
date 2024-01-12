import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';

describe('getProfileData.test', () => {
	test('should be equal to {\n' +
    '\t\t\t\'first\': \'Andrii\',\n' +
    '\t\t\t\'last\': \'Udot\',\n' +
    '\t\t\t\'age\': 45,\n' +
    '\t\t\t\'city\': \'Kharkiv\',\n' +
    '\t\t\t\'country\': Country.Britain,\n' +
    '\t\t\t\'currency\': Currency.USD,\n' +
    '\t\t}', () => {
		const data = {
			'first': 'Andrii',
			'last': 'Udot',
			'age': 45,
			'city': 'Kharkiv',
			'country': Country.Britain,
			'currency': Currency.USD,
		};

		const state: DeepPartial<StateSchema> = {
			profile: {
				data,
			},
		};
		expect(getProfileData(state as StateSchema)).toEqual(data);
	});

	test('should work with empty state', () => {
		const emptyState: DeepPartial<StateSchema> = {};

		expect(getProfileData(emptyState as StateSchema)).toEqual(undefined);
	});
});