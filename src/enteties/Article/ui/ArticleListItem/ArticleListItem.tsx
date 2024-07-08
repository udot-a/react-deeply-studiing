import React, { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/open_eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface ArticleListItemProps {
  className?: string;
	article: Article;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
	const {
		className, article,
		target,
		view = ArticleView.SMALL,
	} = props;
	const { t } = useTranslation();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isHover, bindHover] = useHover();

	const types = (<Text text={article.type.join(', ')} className={cls.types} />);
	const views = (
		<>
			<Text text={String(article.views)} className={cls.views}/>
			<Icon Svg={EyeIcon} />
		</>
	);

	if (view === ArticleView.BIG) {
		const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
				<Card>
					<div className={cls.header}>
						<Avatar src={article.user.avatar} size={30} />
						<Text text={article.user.username} className={cls.username}/>
						<Text text={article.createdAt} className={cls.date}/>
					</div>
					<Text title={article.title} className={cls.title}/>
					{types}
					<img
						alt={article.title}
						src={article.img}
						className={cls.img}
					/>
					{textBlock && (
						<ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
					)}
					<div className={cls.footer}>
						<AppLink
							target={target}
							to={RoutePath.article_details + article.id}
						>
							<Button
								theme={ButtonTheme.BORDERED}
							>
								{t('Read more')}
							</Button>
						</AppLink>
						{views}
					</div>
				</Card>
			</div>
		);
	}

	return (
		<AppLink
			target={target}
			to={RoutePath.article_details + article.id}
		>
			<div
				{...bindHover}
				className={classNames('', {}, [className, cls[view]])}
			>
				<Card>
					<div className={cls.imageWrapper}>
						<img src={article.img} className={cls.img} alt={article.title}/>
						<Text text={article.createdAt} className={cls.date}/>
					</div>
					<div className={cls.infoWrapper}>
						{types}
						{views}
					</div>
					<Text text={article.title} className={cls.title}/>
				</Card>
			</div>
		</AppLink>
	);
});

