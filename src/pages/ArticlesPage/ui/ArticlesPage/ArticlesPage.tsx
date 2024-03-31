import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView, ArticleViewSelector } from 'enteties/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { useSelector } from 'react-redux';
import {
	getArticlesPageHasMore,
	getArticlesPageIsLoading, getArticlesPageNum, getArticlesPageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { Page } from 'shared/ui/Page/Page';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';

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
	// const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);

	const onLoadNextPart = useCallback(() => {
		if (__PROJECT__ === 'storybook') {
			return;
		}
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(articlesPageActions.initState());
		dispatch(fetchArticlesList({
			page: 1,
		}));
	});

	const handleChangeView = useCallback((newView: ArticleView) => {
		dispatch(articlesPageActions.setView(newView));
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterRemount>
			<Page
				className={classNames('', {}, [className])}
				onScrollEnd={onLoadNextPart}
			>
				<ArticleViewSelector view={view} onViewClick={handleChangeView} />
				<ArticleList
					isLoading={isLoading}
					articles={articles}
					view={view}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
