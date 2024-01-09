import React, { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'enteties/Profile/model/slice/profileSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData, ProfileCard } from 'enteties/Profile';

interface ProfilePageProps {
  className?: string;
	isStoryBook: boolean;
}

const reducers: ReducerList = {
	profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className, isStoryBook = false }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!isStoryBook) {
			dispatch(fetchProfileData());
		}
	}, [dispatch, isStoryBook]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterRemount>
			<div className={classNames('', {}, [className])}>
				<ProfileCard />
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
