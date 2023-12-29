import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

// eslint-disable-next-line react/display-name
export const ReduxDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
	return (
		<StoreProvider initialState={initialState as StateSchema}>
			<StoryComponent />
		</StoreProvider>
	);
};