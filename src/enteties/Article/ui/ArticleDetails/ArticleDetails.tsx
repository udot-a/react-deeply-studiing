import React, { FC, memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
	getArticleDetailsError,
	getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { Skeleton } from 'shared/Skeleton/Skeleton';

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
	// const article = useSelector(getArticleDetailsData);
	const error = useSelector(getArticleDetailsError);

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchArticleById(id));
		}
	}, [dispatch, id]);

	let content;

	if (isLoading) {
		content = (
			<div>
				<Skeleton className={cls.avatar} width={200} height={200} border="50%"	/>
				<Skeleton className={cls.title} width={300} height={32} />
				<Skeleton className={cls.skeleton} width={600} height={24} />
				<Skeleton className={cls.skeleton} width="100%" height={200} />
				<Skeleton className={cls.skeleton} width="100%" height={200}	/>
			</div>
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
			<div>
				{'ARTICLE DETAILS'}
			</div>
		);
	}
	return (
		<div className={classNames(cls.ArticleDetails, {}, [className])}>
			<DynamicModuleLoader reducers={reducers} removeAfterRemount>
				{content}
			</DynamicModuleLoader>
		</div>
	);
});

