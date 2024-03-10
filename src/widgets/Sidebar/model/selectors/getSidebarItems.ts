import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'enteties/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile_icon.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { SidebarItemType } from '../../types/sidebar';

export const getSidebarItems = createSelector(
	getUserAuthData,
	(userData) => {
		const sidebarItemsList: SidebarItemType[] = [
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
		];

		if (userData) {
			sidebarItemsList.push({
				path: RoutePath.profile + userData.id,
				Icon: ProfileIcon,
				text: 'goToProfile',
				authOnly: true,
			},
			{
				path: RoutePath.articles,
				Icon: ArticleIcon,
				text: 'goToArticles',
				authOnly: true,
			});
		}

		return sidebarItemsList;
	}
);