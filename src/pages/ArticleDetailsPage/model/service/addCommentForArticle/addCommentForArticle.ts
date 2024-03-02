import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'enteties/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'enteties/Article';
import {
	fetchCommentsByArticleId
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';


export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
	'articleDetails/addCommentForArticle',
	async (text, thunkApi) => {
		const { dispatch, extra, rejectWithValue, getState } = thunkApi;

		const userdata = getUserAuthData(getState());
		const article = getArticleDetailsData(getState());

		if (!userdata || ! text || !article) {
			rejectWithValue('no data');
		}

		try {
			const response = await extra.api.post<Comment>('/comments', {
				articleId: article!.id,
				userId: userdata!.id,
				text,
			});

			if (!response.data) {
				throw new Error();
			}

			dispatch(fetchCommentsByArticleId(article!.id));

			return response.data;
		} catch (e) {
			return rejectWithValue('error');
		}
	}
);