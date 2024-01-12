import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidatesErrors } from './getProfileValidatesErrors';
import { ValidateProfileError } from 'enteties/Profile';

describe('getProfileValidatesErrors.test', () => {
	test('should be  [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.NO_DATA]', () => {
		const validateErrors = [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.NO_DATA];

		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors,
			},
		};
		expect(getProfileValidatesErrors(state as StateSchema)).toEqual(validateErrors);
	});

	test('should return false if empty state', () => {
		const emptyState: DeepPartial<StateSchema> = {};

		expect(getProfileValidatesErrors(emptyState as StateSchema)).toEqual(undefined);
	});
});