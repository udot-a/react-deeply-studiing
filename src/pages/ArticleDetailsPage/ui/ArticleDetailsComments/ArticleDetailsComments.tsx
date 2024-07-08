import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'enteties/Comment';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/service/addCommentForArticle/addCommentForArticle';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import {
	fetchCommentsByArticleId
} from '../../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { VStack } from 'shared/ui/Stack';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo((props) => {
	const { className, id } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	return (
		<VStack gap="8" className={classNames('', {}, [className])}>
			<Text
				size={TextSize.L}
				title={t('Comments')}
			/>
			<AddCommentForm onSendComment={onSendComment}/>
			<CommentList isLoading={commentsIsLoading} comments={comments}/>
		</VStack>
	);
});

