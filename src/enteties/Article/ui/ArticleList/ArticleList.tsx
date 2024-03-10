import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

const getSkeletons = (view: ArticleView) => {
	return Array(view === ArticleView.SMALL ? 9 : 3)
		.fill(0)
		.map((item, index) => (
			<ArticleListItemSkeleton key={index} view={view} />
		));
};

interface ArticleListProps {
  className?: string;
	articles?: Article[];
	isLoading?: boolean;
	view?: ArticleView;
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
	const { className, articles, isLoading, view = ArticleView.SMALL } = props;

	const renderArticle = (article: Article) => {
		return (
			<ArticleListItem key={article.id} article={article} view={view} />
		);
	};

	if (isLoading) {
		return (
			<div
				className={classNames(cls.ArticleList, {}, [className, cls[view]])}
			>
				{getSkeletons(view)}
			</div>
		);
	}

	return (
		<div
			className={classNames(cls.ArticleList, {}, [className, cls[view]])}
		>
			{articles?.length
				? articles.map(renderArticle)
				: null
			}
		</div>
	);
});

