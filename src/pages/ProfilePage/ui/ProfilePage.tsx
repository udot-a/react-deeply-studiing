import React, { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileActions, profileReducer } from 'enteties/Profile/model/slice/profileSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	getProfileReadonly,
	getProfileValidatesErrors,
	ProfileCard, ValidateProfileError,
} from 'enteties/Profile';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'enteties/Currency';
import { Country } from 'enteties/Country';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducerList = {
	profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const form = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidatesErrors);
	const { t } = useTranslation('profile');
	const { id } = useParams<{ id: string }>();

	const validateErrorTranslates = {
		[ValidateProfileError.SERVER_ERROR]: t('Server error'),
		[ValidateProfileError.NO_DATA]: t('Emty data'),
		[ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
		[ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
		[ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
	};

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id));
		}
	});

	const handleProfileFirstName = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ first: value || '' }));
	}, [dispatch]);

	const handleProfileLastName = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ last: value || '' }));
	}, [dispatch]);

	const handleProfileAge = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
	}, [dispatch]);

	const handleProfileCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ city: value || '' }));
	}, [dispatch]);
	
	const handleProfileUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ username: value || '' }));
	}, [dispatch]);

	const handleProfileAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ avatar: value || '' }));
	}, [dispatch]);

	const handleProfileCurrency = useCallback((value: Currency) => {
		dispatch(profileActions.updateProfile({ currency: value }));
	}, [dispatch]);
	
	const handleProfileCountry = useCallback((value: Country) => {
		dispatch(profileActions.updateProfile({ country: value }));
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterRemount>
			<Page className={classNames('', {}, [className])}>
				<ProfilePageHeader />
				{validateErrors?.length && validateErrors.map(err => (
					<Text
						key={err}
						theme={TextTheme.ERROR}
						text={validateErrorTranslates[err]}
					/>
				))}
				<ProfileCard
					data={form}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onFirstNameChange={handleProfileFirstName}
					onLastNameChange={handleProfileLastName}
					onAgeChange={handleProfileAge}
					onCityChange={handleProfileCity}
					onAvatarChange={handleProfileAvatar}
					onUsernameNameChange={handleProfileUsername}
					onCurrencyChange={handleProfileCurrency}
					onCountryChange={handleProfileCountry}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
