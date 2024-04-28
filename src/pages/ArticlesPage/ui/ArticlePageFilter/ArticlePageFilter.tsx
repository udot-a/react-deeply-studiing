import React, { FC, memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePageFilter.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleType, ArticleTypeTabs, ArticleView, ArticleViewSelector } from 'enteties/Article';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { useAppDispatch, useDebounce } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import {
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort, getArticlesPageType,
	getArticlesPageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input';
import { ArticleSortSelector } from 'enteties/Article';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface ArticlePageFilterProps {
  className?: string;
}

export const ArticlePageFilter: FC<ArticlePageFilterProps> = memo((props) => {
	const { className } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const view = useSelector(getArticlesPageView);
	const order = useSelector(getArticlesPageOrder);
	const sort = useSelector(getArticlesPageSort);
	const search = useSelector(getArticlesPageSearch);
	const type = useSelector(getArticlesPageType);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
		{
			value: ArticleType.ALL,
			content: t('All'),
		},
		{
			value: ArticleType.IT,
			content: t('IT'),
		},{
			value: ArticleType.ECONOMICS,
			content: t('Economics'),
		},{
			value: ArticleType.SCIENCE,
			content: t('Science'),
		},
	], [t]);

	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }));
	}, [dispatch]);

	const debouncedFetchData = useDebounce(fetchData, 500);

	const handleChangeType = useCallback((tab: ArticleType) => {
		dispatch(articlesPageActions.setType(tab));
		dispatch(articlesPageActions.setPage(1));
		debouncedFetchData();
	}, [debouncedFetchData, dispatch]);

	const handleChangeView = useCallback((newView: ArticleView) => {
		dispatch(articlesPageActions.setView(newView));
	}, [dispatch]);

	const handleChangeOrder = useCallback((newOrder: SortOrder) => {
		dispatch(articlesPageActions.setOrder(newOrder));
		dispatch(articlesPageActions.setPage(1));
		debouncedFetchData();

	}, [debouncedFetchData, dispatch]);

	const handleChangeSort = useCallback((newSort: ArticleSortField) => {
		dispatch(articlesPageActions.setSort(newSort));
		dispatch(articlesPageActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	const handleChangeSearch = useCallback((newSearch: string) => {
		dispatch(articlesPageActions.setSearch(newSearch));
		dispatch(articlesPageActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	return (
		<div className={classNames('', {}, [className])}>
			<div className={cls.sortWrapper}>
				<ArticleSortSelector
					sort={sort}
					order={order}
					onChangeOrder={handleChangeOrder}
					onChangeSort={handleChangeSort}
				/>
				<ArticleViewSelector view={view} onViewClick={handleChangeView} />
				<Card >
					<Input 
						placeholder={t('Search')}
						onChange={handleChangeSearch}
						value={search}
				 />
				</Card>
			</div>
			<Card className={cls.search}>
				<Input
					placeholder={t('Search')}
					onChange={handleChangeSearch}
					value={search}
				/>
			</Card>
			<ArticleTypeTabs
				value={type}
				onChangeType={handleChangeType}
				className={cls.tabs}
			/>
		</div>
	);
});

