import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
          Go to the main page
				</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
          Go to the about page
				</AppLink>
			</div>
		</div>
	);
};
