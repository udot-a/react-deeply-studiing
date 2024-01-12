import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
	test('should be true', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true,
			},
		};
		expect(getProfileIsLoading(state as StateSchema)).toBe(true);
	});

	test('should return false if empty state', () => {
		const emptyState: DeepPartial<StateSchema> = {};

		expect(getProfileIsLoading(emptyState as StateSchema)).toEqual(false);
	});
});