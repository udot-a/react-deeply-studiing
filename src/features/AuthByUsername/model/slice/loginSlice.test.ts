import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
	test('test set user', () => {
		const state: DeepPartial<LoginSchema> = { username: 'Andrii' };
		expect(loginReducer(state as LoginSchema, loginActions.setUsername('123'))).toEqual({ username: '123' });
	});
  
	test('test set password', () => {
		const state: DeepPartial<LoginSchema> = { password: '123' };
		expect(loginReducer(state as LoginSchema, loginActions.setPassword('111222'))).toEqual({ password: '111222' });
	});
});