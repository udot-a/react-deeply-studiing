import React, { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
  [name in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterRemount: boolean;
	children: React.ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
	const { reducers, children, removeAfterRemount } = props;

	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		const mountedReducers = store.reducerManager.getMountedReducers();

		Object.entries(reducers).forEach(([key, reducer]) => {
			const mounted = mountedReducers[key as StateSchemaKeys];

			if (!mounted) {
				store.reducerManager.add(key as StateSchemaKeys, reducer);
				dispatch({ type: `@INIT ${key} reducer` });
			}
		});

		return () => {
			Object.entries(reducers).forEach(([key]) => {
				if (removeAfterRemount) {
					store.reducerManager.remove(key as StateSchemaKeys);
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

