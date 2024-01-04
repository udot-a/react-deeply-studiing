import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

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
		expect(getLoginState(undefined)).toEqual({ isLoading: false,
			username: '',
			password: '',
			error: '', 
		});
	});
});