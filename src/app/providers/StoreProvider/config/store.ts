import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArgs } from './StateSchema';
import { counterReducer } from 'enteties/Counter';
import { userReducer } from 'enteties/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { uiReducer } from 'features/UI';

export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
) => {
	const rootReducers: ReducersMapObject<StateSchema> ={
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
		ui: uiReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const extraArg: ThunkExtraArgs = {
		api: $api,
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArg,
			}
		})
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']