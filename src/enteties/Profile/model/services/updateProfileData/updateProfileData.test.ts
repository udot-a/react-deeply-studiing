import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import { ValidateProfileError } from '../../types/profile';
import { omit } from 'shared/lib/lodashHelpers';

const data = {
	'first': 'Andrii',
	'last': 'Udot',
	'age': 45,
	'city': 'Kharkiv',
	'country': Country.Britain,
	'currency': Currency.USD,
	'id': '1',
};

describe('updateProfileData.test', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });

		thunk.api.put.mockReturnValue(Promise.resolve({ data }));

		const result = await thunk.callThunk();
		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(data);
	});

	test('server error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk();
		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
	});

	test('validate error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: omit(data, 'age') } });
		thunk.api.put.mockReturnValue(Promise.resolve({ data: omit(data, 'age') }));

		const result = await thunk.callThunk();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
	});
});
