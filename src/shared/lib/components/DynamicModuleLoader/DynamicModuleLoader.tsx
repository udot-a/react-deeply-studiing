import React, { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
  [name in StateSchemaKeys]?: Reducer;
}

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterRemount: boolean;
}

type ReducerListEntry = [StateSchemaKeys, Reducer];

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
	const { reducers, children, removeAfterRemount } = props;

	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([key, reducer]: ReducerListEntry) => {
			if (!(store.getState())?.[key]) {
				store.reducerManager.add(key, reducer);
				dispatch({ type: `@INIT ${key} reducer` });
			}
		});
		

		return () => {
			Object.entries(reducers).forEach(([key]: ReducerListEntry) => {
				if (removeAfterRemount) {
					store.reducerManager.remove(key);
					dispatch({ type: `@DESTROY ${key} reducer` });
				}
			});
		};
		// 	eslint-disable-next-line
  }, [reducers, removeAfterRemount]);

	return (
		<>
			{children}
		</>
	);
};

