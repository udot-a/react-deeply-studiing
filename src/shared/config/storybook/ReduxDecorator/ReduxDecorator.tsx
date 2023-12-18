import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

// eslint-disable-next-line react/display-name
export const ReduxDecorator = (initialState: StateSchema) => (StoryComponent: Story) => {
	return (
		<StoreProvider initialState={initialState}>
			<StoryComponent />
		</StoreProvider>
	);
};