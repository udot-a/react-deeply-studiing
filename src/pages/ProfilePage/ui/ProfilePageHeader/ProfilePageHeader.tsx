import React, { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'enteties/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'enteties/User';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const readonly = useSelector(getProfileReadonly);
	const authData = useSelector(getUserAuthData);
	const profileData = useSelector(getProfileData);
	const canEdit = authData?.id === profileData?.id;

	const handleEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const handleCancel = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const handleSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<HStack justify="between" max className={classNames('', {}, [className])}>
			<Text title={t('Profile')}/>
			{canEdit && (
				<HStack gap="16" >
					{readonly
						? (
							<Button
								onClick={handleEdit}
								theme={ButtonTheme.BORDERED}
								className={cls.editButton}
								data-testid="ProfilePageHeader.EditButton"
							>
								{t('Edit')}
							</Button>
						)
						: (
							<>
								<Button
									onClick={handleCancel}
									theme={ButtonTheme.BORDERED_RED}
									className={cls.editButton}
									data-testid="ProfilePageHeader.CancelButton"
								>
									{t('Cancel')}
								</Button>
								<Button
									onClick={handleSave}
									theme={ButtonTheme.BORDERED}
									className={cls.saveButton}
									data-testid="ProfilePageHeader.SaveButton"
								>
									{t('Save')}
								</Button>
							</>
						)}
				</HStack>
			)}
		</HStack>
	);
};

