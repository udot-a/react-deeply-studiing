import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import { ValidateProfileError } from '../consts/consts';

const profileData = {
	'first': 'Andrii',
	'last': 'Udot',
	'age': 45,
	'city': 'Kharkiv',
	'country': Country.Britain,
	'currency': Currency.USD,
};

describe('profileSlice.test', () => {
	test('readonly should be true', () => {
		const state: DeepPartial<ProfileSchema> = { readonly: false };
		expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
	});

	test('cancelEdit should set readonly to true, validateErrors to undefined and data equals to form', () => {
		const data = {
			first: '123',
			last: '123',
			age: 34,
			city: 'Kharkiv',
		};
		const state: DeepPartial<ProfileSchema> = {
			readonly: false,
			validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
			data: data,
			form: {
				first: 'asssaas',
				last: 'sdsdsdsd',
			},
		};
		expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({ readonly: true, data, form: data, validateErrors: undefined });
	});

	test('test update profile service pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
		};
		expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({ isLoading: true, validateErrors: undefined });
	});

	test('test update profile service fulfilled', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
		};
		expect(
			profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profileData, '')))
			.toEqual({
				readonly: true,
				isLoading: false,
				validateErrors: undefined,
				data: profileData,
				form: profileData,
			});
	});
});
