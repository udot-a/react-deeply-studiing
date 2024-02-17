import React, { FC, memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import EyeIcon from 'shared/assets/icons/open_eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';

import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { Skeleton } from 'shared/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from 'enteties/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'enteties/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 'enteties/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
	id: string;
}

const reducers: ReducerList = {
	articleDetails: articleDetailsReducer
};
export const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className, id }) => {
	const { t } = useTranslation('article');
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const article = useSelector(getArticleDetailsData);
	const error = useSelector(getArticleDetailsError);

	const renderBlock = useCallback((block: ArticleBlock, idx: number) => {
		switch (block.type) {
		case ArticleBlockType.CODE:
			return <ArticleCodeBlockComponent key={`${block?.code}${idx}`} className={cls.block} block={block}/>;
		case ArticleBlockType.IMAGE:
			return <ArticleImageBlockComponent key={`${block?.title}${idx}`} className={cls.block} block={block} />;
		case ArticleBlockType.TEXT:
			return <ArticleTextBlockComponent key={`${block?.title}${idx}`} className={cls.block} block={block}/>;
		default:
			return null;
		}
	}, []);

	useInitialEffect(() => dispatch(fetchArticleById(id)));
	let content;

	if (isLoading) {
		content = (
			<>
				<Skeleton className={cls.avatar} width={200} height={200} border="50%"	/>
				<Skeleton className={cls.title} width={300} height={32} />
				<Skeleton className={cls.skeleton} width={600} height={24} />
				<Skeleton className={cls.skeleton} width="100%" height={200} />
				<Skeleton className={cls.skeleton} width="100%" height={200}	/>
			</>
		);
	} else	if (error) {
		content = (
			<Text
				align={TextAlign.CENTER}
				theme={TextTheme.ERROR}
				title={t('An Error happens when article has been loading')}
			/>
		);
	} else {
		content = (
			<>
				<div className={cls.avatarWrapper}>
					<Avatar size={200} src={article?.img} className={cls.avatar}/>
				</div>
				<Text
					className={cls.title}
					title={article?.title}
					text={article?.subtitle}
					size={TextSize.L}
				/>
				<div className={cls.articleInfo}>
					<EyeIcon className={cls.icon} />
					<Text text={String(article?.views)} />
				</div>
				<div className={cls.articleInfo}>
					<CalendarIcon className={cls.icon} />
					<Text text={article?.createdAt} />
				</div>
				{article?.blocks.map(renderBlock)}
			</>
		);
	}
	return (
		<div className={classNames('', {}, [className])}>
			<DynamicModuleLoader reducers={reducers} removeAfterRemount>
				{content}
			</DynamicModuleLoader>
		</div>
	);
});

