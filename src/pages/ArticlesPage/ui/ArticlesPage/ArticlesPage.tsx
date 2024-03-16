import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView, ArticleViewSelector } from 'enteties/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
	getArticlesPageIsLoading, getArticlesPageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

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

	useInitialEffect(() => {
		dispatch(fetchArticlesList());
		dispatch(articlesPageActions.initState());
	});

	const handleChangeView = useCallback((newView: ArticleView) => {
		dispatch(articlesPageActions.setView(newView));
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterRemount>
			<div className={classNames('', {}, [className])}>
				<ArticleViewSelector view={view} onViewClick={handleChangeView} />
				<ArticleList
					isLoading={isLoading}
					articles={articles}
					view={view}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
