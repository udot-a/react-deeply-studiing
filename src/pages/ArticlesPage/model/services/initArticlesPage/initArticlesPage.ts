import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'enteties/Article';


export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
	'articlesPage/initArticlesPage',
	async (searchParams, thunkApi) => {
		const { getState, dispatch } = thunkApi;
		const inited = 	getArticlesPageInited(getState());

		if (!inited) {
			const orderFromUrl = searchParams.get('order');
			const sortFromUrl = searchParams.get('sort');
			const searchFromUrl = searchParams.get('search');

			if (orderFromUrl) {
				dispatch(articlesPageActions.setOrder(orderFromUrl as SortOrder));
			}

			if (sortFromUrl) {
				dispatch(articlesPageActions.setSort(sortFromUrl as ArticleSortField));
			}

			if (searchFromUrl) {
				dispatch(articlesPageActions.setSearch(searchFromUrl));
			}

			dispatch(articlesPageActions.initState());
			dispatch(fetchArticlesList({}));
		}
	},
);
