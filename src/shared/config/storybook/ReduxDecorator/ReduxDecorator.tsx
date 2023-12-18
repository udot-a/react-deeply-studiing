import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const ReduxDecorator = (initialState: StateSchema) => (StoryComponent: Story) => {
	return (
		<StoreProvider initialState={initialState}>
			<StoryComponent />
		</StoreProvider>
	);
};