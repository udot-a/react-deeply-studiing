import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'enteties/Article';

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
	'articleDetailsPage/fetchArticleRecommendations',
	async (props, thunkApi) => {
		// eslint-disable-next-line no-mixed-spaces-and-tabs
		const { extra, rejectWithValue } = thunkApi;

		try {
			const response = await extra.api.get<Article[]>('/articles', {
				params: {
					_limit: 4,
				},
			});

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('error');
		}
	},
);
