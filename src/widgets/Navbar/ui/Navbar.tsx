import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsOpen(prev => !prev);
	}, []);

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
				{t('login')}
			</Button>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<Modal isOpen={isOpen} onClose={onToggleModal}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur culpa est fugit magnam officia quam sit suscipit temporibus voluptates!
			</Modal>
		</div>
	);
};

