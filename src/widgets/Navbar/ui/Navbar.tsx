import React, { FC, memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User';
import { Text, TextTheme } from 'shared/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropDown } from 'features/avatarDropdown/ui/AvatarDopdown/AvatarDropDown';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsOpen(true);
	}, []);

	if (authData) {
		return (
			<div className={classNames(cls.navbar, {}, [className])}>
				<Text className={cls.appName} title={t('Andrii Udot Pet Project')} theme={TextTheme.SECONDARY}/>
				<AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} >
					{t('Create article')}
				</AppLink>
				<HStack gap={'16'} className={cls.actions}>
					<NotificationButton />
					<AvatarDropDown />
				</HStack>
			</div>
		);
	}

	return (
		<header className={classNames(cls.navbar, {}, [className])}>
			<Text className={cls.appName} title={t('Andrii Udot Pet Project')} theme={TextTheme.SECONDARY}/>
			<Button
				data-testid="login-button-test"
				theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}
				onClick={onShowModal}>
				{t('login')}
			</Button>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			{isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
		</header>
	);
});
