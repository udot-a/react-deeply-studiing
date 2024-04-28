import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';

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
	const { t } = useTranslation();

	const renderArticle = (article: Article) => {
		return (
			<ArticleListItem key={article.id} article={article} view={view} />
		);
	};

	// if (isLoading) {
	// 	return (
	// 		<div
	// 			className={classNames(cls.ArticleList, {}, [className, cls[view]])}
	// 		>
	// 			{getSkeletons(view)}
	// 		</div>
	// 	);
	// }

	if (!isLoading && !articles?.length) {
		return (
			<div
				className={classNames(cls.ArticleList, {}, [className, cls[view]])}
			>
				<Text size={TextSize.L} title={t('No articles were found')} />
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
			{isLoading && getSkeletons(view)}
		</div>
	);
});

