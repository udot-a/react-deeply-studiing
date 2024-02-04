import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'enteties/Profile';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'enteties/Article/model/slice/articleDetailsSlice';

const defaultAsyncReducers: ReducerList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
};
// eslint-disable-next-line react/display-name
export const ReduxDecorator = (
	initialState: DeepPartial<StateSchema>,
	asyncReducers?: ReducerList,
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