import {
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
	ArticleDetailsPageRecommendationsSchema
} from '../types/ArticleDetailsPageRecommendationsSchema';
import { Article } from 'enteties/Article';
import {
	fetchArticleRecommendations
} from 'pages/ArticleDetailsPage/model/service/fetchAticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
	// Assume IDs are stored in a field other than `book.id`
	selectId: (article: Article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>((state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState());

const articleDetailsPageRecommendationsSlice = createSlice({
	name: 'articleDetailsPageRecommendationsSlice',
	initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
	}),
	reducers: {

	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleRecommendations.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
				state.isLoading = false;
				recommendationsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticleRecommendations.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
