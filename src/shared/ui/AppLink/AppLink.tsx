import React, { forwardRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AppLink = forwardRef((props: AppLinkProps, ref) => {
	const { to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps } = props;

	return (
		<Link
			to={to}
			className={classNames(cls.appLink, {  }, [className, cls[theme]])}
			{...otherProps}
		>
			<div>
				{children}
			</div>
		</Link>
	);
});

