import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'enteties/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { useSelector } from 'react-redux';
import {
	getArticlesPageIsLoading, getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { Page } from 'widgets/Page/Page';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter';
import cls from './ArticlesPage.module.scss';
import { useSearchParams } from 'react-router-dom';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
	articlesPage: articlesPageReducer,
};
const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const view = useSelector(getArticlesPageView);
	const [search] = useSearchParams();

	const onLoadNextPart = useCallback(() => {
		if (__PROJECT__ === 'storybook') {
			return;
		}
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(initArticlesPage(search));
	});

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterRemount>
			<Page
				className={classNames('', {}, [className])}
				onScrollEnd={onLoadNextPart}
			>
				<ArticlePageFilter/>
				<ArticleList
					isLoading={isLoading}
					articles={articles}
					view={view}
					className={cls.list}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
