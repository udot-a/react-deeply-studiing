import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'enteties/Article';
import { useParams } from 'react-router-dom';
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
} from 'pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';

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

	useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

	if (!id && __PROJECT__ !=='storybook') {
		return (
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				{t('Article not found')}
			</div>
		);
	}
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterRemount>
			<div className={classNames('', {}, [className])}>
				<ArticleDetails id={id || '1'}/>
				<Text className={cls.commentTitle} title={t('Comments')}/>
				<CommentList isLoading={commentsIsLoading} comments={comments}/>
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
