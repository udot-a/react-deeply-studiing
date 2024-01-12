import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';

describe('fetchProfileData.test', () => {
	test('success', async () => {
		const data = {
			'first': 'Andrii',
			'last': 'Udot',
			'age': 45,
			'city': 'Kharkiv',
			'country': Country.Britain,
			'currency': Currency.USD,
		};
		const thunk = new TestAsyncThunk(fetchProfileData);

		thunk.api.get.mockReturnValue(Promise.resolve({ data }));

		const result = await thunk.callThunk();
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(data);
	});
	test('error', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk();
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});