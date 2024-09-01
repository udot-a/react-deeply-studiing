import React, { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { TextSize } from '@/shared/ui/Text/ui/Text';
import { ArticleView } from '../../model/consts/consts';

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
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
	const {
		className,
		articles,
		isLoading,
		target,
		view = ArticleView.SMALL,
	} = props;
	const { t } = useTranslation();

	if (!isLoading && (!articles || !articles?.length)) {
		return (
			<div
				className={classNames(cls.ArticleList, {}, [className, cls[view]])}
			>
				<Text size={TextSize.L} title={t('No articles were found')}/>
			</div>
		);
	}

	// @ts-ignore
	return (
		<div
			className={classNames(cls.ArticleList, {}, [className, cls[view]])}
		>
			{articles && articles.map(item => (
				<ArticleListItem
					article={item}
					view={view}
					target={target}
					key={item.id}
					className={cls.card}
				/>
			)
			)}
			{isLoading && getSkeletons(view)}
		</div>
	);
});

