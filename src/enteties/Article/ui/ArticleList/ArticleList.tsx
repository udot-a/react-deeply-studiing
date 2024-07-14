import React, { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
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
	virtualized?: boolean;
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
	const {
		className,
		articles,
		isLoading,
		target,
		view = ArticleView.SMALL,
		virtualized = true,
	} = props;
	const { t } = useTranslation();

	const isBig = view === ArticleView.BIG;

	const itemsPerRow = isBig ? 1 : 6;
	const rowCount = isBig ? (articles as Article[])?.length : Math.ceil((articles as Article[])?.length / itemsPerRow);

	const rowRenderer = ({ index, key, style }: ListRowProps) => {
		const items = [];
		const fromIndex = index * itemsPerRow;
		const toIndex = Math.min(fromIndex + itemsPerRow, articles?.length || 0);

		for (let i = fromIndex; i < toIndex; i++) {
			items.push(
				<ArticleListItem
					key={articles?.[i].id}
					article={articles?.[i] as Article}
					view={view}
					target={target}
					className={cls.card}
				/>
			);
		}

		return (
			<div
				key={key}
				style={style}
				className={cls.row}
			>
				{items}
			</div>
		);
	};

	if (!isLoading  && (!articles || !articles?.length)) {
		return (
			<div
				className={classNames(cls.ArticleList, {}, [className, cls[view]])}
			>
				<Text size={TextSize.L} title={t('No articles were found')} />
			</div>
		);
	}

	// @ts-ignore
	return (
		<WindowScroller
			scrollElement={document.getElementById(PAGE_ID) as Element}
		>
			{({
				width,
				height,
				registerChild,
				scrollTop,
				isScrolling,
				onChildScroll,
			}) => (
				<div
					// @ts-ignore
					ref={registerChild}
					className={classNames(cls.ArticleList, {}, [className, cls[view]])}
				>
					{virtualized
						? (
							<List
								height={height || 0}
								rowCount={rowCount}
								rowHeight={isBig ? 700 : 330}
								rowRenderer={rowRenderer}
								width={width || 0}
								autoHeight
								autoWidth={isBig}
								onScroll={onChildScroll}
								isScrolling={isScrolling}
								scrollTop={scrollTop}
							/>
						)
						: (
							articles && articles.map(item => (
								<ArticleListItem
									article={item}
									view={view}
									target={target}
									key={item.id}
									className={cls.card}
								/>
							))
						)
					}
					{isLoading && getSkeletons(view)}
				</div>
			)}
		</WindowScroller>
	);
});

