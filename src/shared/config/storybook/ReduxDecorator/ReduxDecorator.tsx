import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'pages/ProfilePage';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer,
	profile: profileReducer,
};
// eslint-disable-next-line react/display-name
export const ReduxDecorator = (
	initialState: DeepPartial<StateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => {
	return (
		<StoreProvider
			initialState={initialState as StateSchema}
			asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
		>
			<StoryComponent />
		</StoreProvider>
	);
};