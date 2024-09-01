import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/enteties/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/enteties/User';
import { Skeleton } from '@/shared/Skeleton/Skeleton';

export interface ArticleRatingProps {
  className?: string;
	articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = memo((props) => {
	const { className, articleId } = props;
	const { t } = useTranslation();
	const userData = useSelector(getUserAuthData);

	const { data, isLoading } = useGetArticleRating({
		articleId,
		userId: userData?.id ?? '',
	});

	const [rateArticleMutation] = useRateArticle();

	const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
		try {
			rateArticleMutation({
				userId: userData?.id ?? '',
				articleId,
				rate: starsCount,
				feedback,
			});
		} catch(e) {
			console.error(e);
		}
	}, [articleId, rateArticleMutation, userData?.id]);


	const onAccept = useCallback((starsCount: number, feedback?: string) => {
		handleRateArticle(starsCount, feedback);
	}, [handleRateArticle]);

	const onCancel = useCallback((starsCount: number) => {
		handleRateArticle(starsCount);
	}, [handleRateArticle]);

	if (isLoading) {
		return <Skeleton width="100%" height={120} />;
	}

	const rating = data?.[0];

	return (
		<RatingCard
			onAccept={onAccept}
			onCancel={onCancel}
			className={className}
			title={t('Rate article')}
			feedbackTitle={t('Left your feedback about article')}
			hasFeedback
			rate={rating?.rate}
		/>

	);
});

export default ArticleRating;
