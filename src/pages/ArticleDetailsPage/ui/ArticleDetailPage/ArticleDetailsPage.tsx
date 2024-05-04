import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'enteties/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'enteties/Comment';
import cls from './ArticleDetailsPage.module.scss';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { fetchCommentsByArticleId } from '../../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from '../../model/service/addCommentForArticle/addCommentForArticle';
import { Page } from 'widgets/Page/Page';
import {
	getArticleRecommendations
} from '../../model/slice/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { TextSize } from 'shared/ui/Text/ui/Text';
import {
	fetchArticleRecommendations
} from '../../model/service/fetchAticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slice';
import {
	ArticleDetailsPageHeader
} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducers: ReducerList = {
	articleDetailsPage: articleDetailsPageReducer,
};
interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { t } = useTranslation('article');
	const { id } = useParams<{ id: string }>();
	const comments = useSelector(getArticleComments.selectAll);
	const recomendations = useSelector(getArticleRecommendations.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const recomendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
	const dispatch = useAppDispatch();

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
		dispatch(fetchArticleRecommendations());
	});

	if (!id && __PROJECT__ !=='storybook') {
		return (
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				{t('Article not found')}
			</div>
		);
	}
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterRemount>
			<Page className={classNames('', {}, [className])}>
				<ArticleDetailsPageHeader />
				<ArticleDetails id={id || '1'}/>
				<Text
					size={TextSize.L}
					className={cls.commentTitle}
					title={t('Recommend')}
				/>
				<ArticleList
					articles={recomendations}
					isLoading={recomendationsIsLoading}
					className={cls.recommendations}
					target="_blank"
				/>
				<Text
					size={TextSize.L}
					className={cls.commentTitle}
					title={t('Comments')}
				/>
				<AddCommentForm onSendComment={onSendComment}/>
				<CommentList isLoading={commentsIsLoading} comments={comments}/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
