import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfile } from '../validateProfile/validateProfile';
import { ValidateProfileError } from '../../consts/consts';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
	'profile/updateProfileData',
	async (_, thunkApi) => {
		const { extra, rejectWithValue, getState } = thunkApi;

		const formData = getProfileForm(getState());

		const errors: ValidateProfileError[] = validateProfile(formData);

		if (errors.length) {
			return rejectWithValue(errors);
		}
		try {
			const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
		}
	}
);
