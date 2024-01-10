import React, { FC, memo } from 'react';
import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User';

interface SidebarItemProps {
  item: SidebarItemType;
	collapsed: boolean;
}

// eslint-disable-next-line react/prop-types
export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
	const { t } = useTranslation();
	const isAuth = useSelector(getUserAuthData);

	if (!isAuth && item.authOnly) {
		return null;
	}

	return (
		<AppLink
			to={item.path}
			theme={AppLinkTheme.SECONDARY}
			className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
		>
			<item.Icon className={cls.icon}/>
			<span className={cls.link}>
				{t(item.text)}
			</span>
		</AppLink>
	);
});

