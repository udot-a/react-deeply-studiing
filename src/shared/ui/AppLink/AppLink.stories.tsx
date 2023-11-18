import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'shared/AppLink',
	component: AppLink,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	}
} as ComponentMeta<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PrimaryDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryDark.args = {
	theme: AppLinkTheme.PRIMARY,
	children: 'LINK TO',
};
PrimaryDark.decorators = [RouterDecorator, StyleDecorator, ThemeDecorator(Theme.DARK)];

export const PrimaryLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryLight.args = {
	theme: AppLinkTheme.PRIMARY,
	children: 'LINK TO',
};
PrimaryLight.decorators = [RouterDecorator, StyleDecorator, ThemeDecorator(Theme.LIGHT)];


export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
	theme: AppLinkTheme.SECONDARY,
	children: 'LINK TO',
};
SecondaryDark.decorators = [RouterDecorator, StyleDecorator, ThemeDecorator(Theme.DARK)];

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
	theme: AppLinkTheme.SECONDARY,
	children: 'LINK TO',
};
SecondaryLight.decorators = [RouterDecorator, StyleDecorator, ThemeDecorator(Theme.LIGHT)];
