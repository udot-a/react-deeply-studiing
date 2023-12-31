import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile_icon.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const sidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		Icon: MainIcon,
		text: 'goToMain',
	},
	{
		path: RoutePath.about,
		Icon: AboutIcon,
		text: 'goToAbout',
	},
	{
		path: RoutePath.profile,
		Icon: ProfileIcon,
		text: 'goToProfile'
	},
];
