import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
	test('should return { username: \'Andrii\', password: \'123\', isLoading: true, error: \'error\' }', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				isLoading: true,
				username: 'Andrii',
				password: '123',
				error: 'error',
			}
		};
		expect(getLoginState(state as StateSchema)).toEqual({ isLoading: true,
			username: 'Andrii',
			password: '123',
			error: 'error', });
	});

	test('should work with undefined', () => {
		const emptyState: DeepPartial<StateSchema> = {
			loginForm: undefined,
		};

		expect(getLoginState(emptyState as StateSchema)).toEqual({ isLoading: false,
			username: '',
			password: '',
			error: '',
		});
	});
});
