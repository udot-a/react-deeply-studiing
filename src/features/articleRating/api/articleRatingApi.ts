import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/enteties/Rating';

interface GetArticeleRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRating: build.query<Rating[], GetArticeleRatingArg>({
			query: ({ userId, articleId }) => ({
				url: '/article-ratings',
				params: {
					userId,
					articleId,
				}
			})
		}),
		rateArticle: build.mutation<void, RateArticleArg>({
			query: (body) => ({
				url: '/article-ratings',
				method: 'POST',
				body,
			})
		})
	}),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
