import React, { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileActions, profileReducer } from 'enteties/Profile/model/slice/profileSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	fetchProfileData,
	getProfileError, getProfileForm,
	getProfileIsLoading, getProfileReadonly,
	ProfileCard,
} from 'enteties/Profile';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'enteties/Currency';
import { Country } from 'enteties/Country';

interface ProfilePageProps {
  className?: string;
	isStoryBook: boolean;
}

const reducers: ReducerList = {
	profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className, isStoryBook = false }) => {
	const dispatch = useAppDispatch();
	const form = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);

	useEffect(() => {
		if (!isStoryBook) {
			dispatch(fetchProfileData());
		}
	}, [dispatch, isStoryBook]);

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
			<div className={classNames('', {}, [className])}>
				<ProfilePageHeader />
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
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
