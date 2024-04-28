import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'enteties/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'enteties/Comment';
import cls from './ArticleDetailsPage.module.scss';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import {
	fetchCommentsByArticleId
} from '../../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from '../../model/service/addCommentForArticle/addCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';

const reducers: ReducerList = {
	articleDetailsComments: articleDetailsCommentsReducer,
};
interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { t } = useTranslation('article');
	const { id } = useParams<{ id: string }>();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const dispatch = useAppDispatch();

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);
	const navigate = useNavigate();

	useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

	const handleBackPress = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

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
				<Button theme={ButtonTheme.BORDERED} onClick={handleBackPress}>
					{t('Back to list')}
				</Button>
				<ArticleDetails id={id || '1'}/>
				<Text className={cls.commentTitle} title={t('Comments')}/>
				<AddCommentForm onSendComment={onSendComment}/>
				<CommentList isLoading={commentsIsLoading} comments={comments}/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
