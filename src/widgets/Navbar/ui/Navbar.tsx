import React, { FC, memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'enteties/User';
import { Text, TextTheme } from 'shared/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const authData = useSelector(getUserAuthData);
	const isAdmin = useSelector(isUserAdmin);
	const isManager = useSelector(isUserManager);
	const dispatch = useDispatch();

	const isAdminPanelAvalable = isAdmin || isManager;

	const onCloseModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsOpen(true);
	}, []);

	const handleLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (authData) {
		return (
			<div className={classNames(cls.navbar, {}, [className])}>
				<Text className={cls.appName} title={t('Andrii Udot Pet Project')} theme={TextTheme.SECONDARY}/>
				<AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} >
					{t('Create article')}
				</AppLink>
				<Dropdown
					className={cls.dropdown}
					items={[
						...(isAdminPanelAvalable ? [{
							content: t('Admin panel'),
							href: RoutePath.admin_panel,
						}] : []),
						{
							content: t('Profile'),
							href: RoutePath.profile + authData.id,
						},
						{
							content: t('Logout'),
							onClick: handleLogout,
						},
					]}
					trigger={<Avatar size={30} src={authData.avatar}/>}
					direction="bottom left"
				/>
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
