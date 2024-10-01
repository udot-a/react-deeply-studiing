import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/enteties/User';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile_icon.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { SidebarItemType } from '../../types/sidebar';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router';

export const getSidebarItems = createSelector(
	getUserAuthData,
	(userData) => {
		const sidebarItemsList: SidebarItemType[] = [
			{
				path: getRouteMain(),
				Icon: MainIcon,
				text: 'goToMain',
			},
			{
				path: getRouteAbout(),
				Icon: AboutIcon,
				text: 'goToAbout',
			},
		];

		if (userData) {
			sidebarItemsList.push({
				path: getRouteProfile(userData.id),
				Icon: ProfileIcon,
				text: 'goToProfile',
				authOnly: true,
			},
			{
				path: getRouteArticles(),
				Icon: ArticleIcon,
				text: 'goToArticles',
				authOnly: true,
			});
		}

		return sidebarItemsList;
	}
);
