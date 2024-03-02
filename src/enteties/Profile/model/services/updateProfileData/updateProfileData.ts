import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from 'enteties/Profile';
import { validateProfile } from 'enteties/Profile/model/services/validateProfile/validateProfile';

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