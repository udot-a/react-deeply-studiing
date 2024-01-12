import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
	test('should be true', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readonly: true,
			},
		};
		expect(getProfileReadonly(state as StateSchema)).toBe(true);
	});

	test('should return undefined if empty state', () => {
		const emptyState: DeepPartial<StateSchema> = {};

		expect(getProfileReadonly(emptyState as StateSchema)).toEqual(undefined);
	});
});