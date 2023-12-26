import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsOpen(true);
	}, []);

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				data-testid="login-button-test"
				theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}
				onClick={onShowModal}>
				{t('login')}
			</Button>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<LoginModal isOpen={isOpen} onClose={onCloseModal}/>
		</div>
	);
};

