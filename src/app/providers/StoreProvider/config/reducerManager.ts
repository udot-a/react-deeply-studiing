import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKeys } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
	const reducers = { ...initialReducers };

	let combinedReducer = combineReducers(reducers);

	let keysToRemove: StateSchemaKeys[] = [];
	const mountedReducers: OptionalRecord<StateSchemaKeys, boolean> = {};

	return {
		getReducerMap: () => reducers,
		getMountedReducers: () => mountedReducers,
		reduce: (state: StateSchema, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state };
        
				keysToRemove.forEach((key) => delete state[key]);
				
				keysToRemove = [];
			}

			return combinedReducer(state, action);
		},

		add: (key: StateSchemaKeys, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return;
			}

			reducers[key] = reducer;
			mountedReducers[key] = true;

			combinedReducer = combineReducers(reducers);
		},

		remove: (key: StateSchemaKeys) => {
			if (!key || !reducers[key]) {
				return;
			}

			delete reducers[key];

			keysToRemove.push(key);
			mountedReducers[key] = false;

			combinedReducer = combineReducers(reducers);
		}
	};
}
