import React, { FC, memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from 'shared/ui/Stack';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSelector(getSidebarItems);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	const renderAppLinks = useMemo(() =>
		sidebarItemsList.map((item) => (
			<SidebarItem item={item} key={item.text} collapsed={collapsed}/>
		)
		), [collapsed, sidebarItemsList]);

	return (
		<aside
			data-testid="sidebar"
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>

			<VStack role="navigation" gap="8" className={cls.links}>
				{renderAppLinks}
			</VStack>

			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher className={cls.lang} short={collapsed}/>
			</div>
		</aside>
	);
});
