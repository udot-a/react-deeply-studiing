import React, { FC, memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'enteties/User';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useDispatch();

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
				<Button
					data-testid="login-button-test"
					theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}
					onClick={handleLogout}>
					{t('Logout')}
				</Button>
				{/* eslint-disable-next-line i18next/no-literal-string */}
			</div>
		);
	}

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				data-testid="login-button-test"
				theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}
				onClick={onShowModal}>
				{t('login')}
			</Button>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			{isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
		</div>
	);
});
