import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/Skeleton/Skeleton';
import { ArticleView } from '../../model/consts/consts';

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo((props) => {
	const { className, view = ArticleView.SMALL } = props;

	if (view === ArticleView.BIG) {
		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
				<Card>
					<div className={cls.header}>
						<Skeleton border="50%" height={30} width={30}/>
						<Skeleton width={150} height={16} className={cls.username}/>
					</div>
					<Skeleton width={250} height={24} className={cls.title}/>
					<Skeleton
						height={200}
						className={cls.img}
					/>
					<div className={cls.footer}>
						<Skeleton height={36} width={200}/>
					</div>
				</Card>
			</div>
		);
	}

	return (
		<div
			className={classNames('', {}, [className, cls[view]])}
		>
			<Card>
				<div className={cls.imageWrapper}>
					<Skeleton width={200} height={200} className={cls.img} />
				</div>
				<div className={cls.infoWrapper}>
					<Skeleton width={130} height={16} />
				</div>
				<Skeleton height={16} width={150} className={cls.title} />
			</Card>
		</div>
	);
});
