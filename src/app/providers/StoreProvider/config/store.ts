import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'enteties/Counter';
import { userReducer } from 'enteties/User';
import { loginReducer } from 'features/AuthByUsername';

export const createReduxStore = (initialState?: StateSchema) => {
	const rootReducers: ReducersMapObject<StateSchema> ={
		counter: counterReducer,
		user: userReducer,
		loginForm: loginReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});

};