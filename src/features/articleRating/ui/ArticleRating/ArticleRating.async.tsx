import { ArticleRatingProps } from '@/features/articleRating/ui/ArticleRating/ArticleRating';
import { lazy, FC, Suspense } from 'react';
import { Skeleton } from '@/shared/Skeleton/Skeleton';

const ArticleRatingLazy = lazy <FC<ArticleRatingProps>>(
	() => import('./ArticleRating'),
);

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
	return (
		<Suspense fallback={<Skeleton width="100%" height={120}/>}>
			<ArticleRatingLazy {...props} />
		</Suspense>
	);
};
