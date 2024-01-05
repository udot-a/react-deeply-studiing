import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../model/slice/profileSlice';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducerList = {
	profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
	const { t } = useTranslation();
  
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterRemount>
			<div className={classNames('', {}, [className])}>
				{t('PROFILE PAGE')}
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
