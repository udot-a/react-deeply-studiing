import { loginByUsername } from './loginByUsername';
import { userActions } from 'enteties/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUserName.test', () => {
	test('success login: should be called dispatch, post and got an fulfilled result', async () => {
		const userValue = { username: 'Andrii', id: '1' };
		const thunk = new TestAsyncThunk(loginByUsername);

		thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const result = await thunk.callThunk({ username: 'Andrii', password: '123' });
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(userValue));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(userValue);
	});
	test('error login', async () => {
		const thunk = new TestAsyncThunk(loginByUsername);
		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk({ username: 'Andrii', password: '123' });
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});