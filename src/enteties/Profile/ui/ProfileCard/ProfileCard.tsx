import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileFirstName/getProfileFirstname';
import { getProfileError } from 'enteties/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'enteties/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
	const { t } = useTranslation('profile');
	const data = useSelector(getProfileData);
	// const error = useSelector(getProfileError);
	// const isLoading = useSelector(getProfileIsLoading);

	return (
		<div className={classNames(cls.profileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t('Profile')}/>
				<Button theme={ButtonTheme.BORDERED} className={cls.editButton}>
					{t('Edit')}
				</Button>
			</div>
			<div className={cls.data}>
				<Input
					value={data?.first}
					placeholder={t('Your name')}
					className={cls.input}
				/>

				<Input
					value={data?.last}
					placeholder={t('Your surname')}
					className={cls.input}
				/>
			</div>
		</div>
	);
};

