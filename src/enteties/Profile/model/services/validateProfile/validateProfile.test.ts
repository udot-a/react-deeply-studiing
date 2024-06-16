import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import { validateProfile } from './validateProfile';
import { omit } from 'shared/lib/lodashHelpers';
import { ValidateProfileError } from '../../types/profile';

const data = {
	'first': 'Andrii',
	'last': 'Udot',
	'age': 45,
	'city': 'Kharkiv',
	'country': Country.Britain,
	'currency': Currency.USD,
};

describe('validateProfile.test', () => {
	test('should be Age error', () => {
		expect(validateProfile(omit(data, 'age'))).toEqual([ValidateProfileError.INCORRECT_AGE]);
	});

	test('should be User data error', () => {
		expect(validateProfile(omit(data, 'first'))).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
	});
});
