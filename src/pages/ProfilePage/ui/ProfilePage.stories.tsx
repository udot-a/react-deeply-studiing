import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { StateSchema } from 'app/providers/StoreProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfilePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

const initialState: DeepPartial<StateSchema> = {
	counter: {
		value: 11,
	},
};

export const ProfileDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProfileDark.args = {
	isStoryBook: true,
};
ProfileDark.decorators = [ReduxDecorator(initialState as StateSchema), RouterDecorator, StyleDecorator, ThemeDecorator(Theme.DARK)];

export const ProfileLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProfileLight.args = {
	isStoryBook: true,
};
ProfileLight.decorators = [ReduxDecorator(initialState as StateSchema), RouterDecorator, StyleDecorator, ThemeDecorator(Theme.LIGHT)];