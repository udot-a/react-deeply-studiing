import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation('translation');
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
					{t('goToMain')}
				</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
					{t('goToAbout')}
				</AppLink>
			</div>
		</div>
	);
};

