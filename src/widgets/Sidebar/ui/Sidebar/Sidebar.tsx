import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
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

			<div className={cls.links}>
				<div className={cls.item}>
					<AppLink
						to={RoutePath.main}
						theme={AppLinkTheme.SECONDARY}
					>
						<MainIcon className={cls.icon}/>
						<span className={cls.link}>
							{t('goToMain')}
						</span>
					</AppLink>
				</div>

				<div className={cls.item}>
					<AppLink
						to={RoutePath.about}
						theme={AppLinkTheme.SECONDARY}
					>
						<AboutIcon className={cls.icon}/>
						<span className={cls.link}>
							{t('goToAbout')}
						</span>
					</AppLink>
				</div>
			</div>

			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher className={cls.lang} short={collapsed}/>
			</div>
		</div>
	);
};

