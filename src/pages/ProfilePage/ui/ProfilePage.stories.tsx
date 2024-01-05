import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

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
// @ts-ignore
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

const initialState: DeepPartial<StateSchema> = {
	counter: {
		value: 11,
	},
};

export const ProfileDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProfileDark.args = {};
ProfileDark.decorators = [ReduxDecorator(initialState as StateSchema), StyleDecorator, ThemeDecorator(Theme.DARK)];

export const ProfileLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProfileLight.args = {};
ProfileLight.decorators = [ReduxDecorator(initialState as StateSchema), StyleDecorator, ThemeDecorator(Theme.LIGHT)];
