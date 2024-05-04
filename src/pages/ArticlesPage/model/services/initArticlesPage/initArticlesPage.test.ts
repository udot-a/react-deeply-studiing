import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';

// jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage test', () => {
	test('initArticlesPage called 1st time', async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			articlesPage: {
				page: 1,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: true,
				_inited: false,
			},
		});

		await thunk.callThunk(new URLSearchParams());

		expect(thunk.dispatch).toBeCalledTimes(4);
	});
	test('initArticlesPage called not 1st time', async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			articlesPage: {
				page: 1,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: false,
				_inited: true,
			},
		});

		await thunk.callThunk(new URLSearchParams());

		expect(thunk.dispatch).toBeCalledTimes(2);
	});
});
