import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
	test('should be equal to 123', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: '123',
			},
		};
		expect(getProfileError(state as StateSchema)).toBe('123');
	});

	test('should work with empty state', () => {
		const emptyState: DeepPartial<StateSchema> = {};

		expect(getProfileError(emptyState as StateSchema)).toEqual('');
	});
});