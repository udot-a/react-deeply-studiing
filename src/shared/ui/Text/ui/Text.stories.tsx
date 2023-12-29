import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'shared/Text',
	component: Text,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	title: 'Title',
	text: 'Some text will be typed here.'
};
PrimaryDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
	title: 'Title',
	text: 'Some text will be typed here.'
};
PrimaryLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const Error = Template.bind({});
Error.args = {
	title: 'Title',
	text: 'Some text will be typed here.',
	theme: TextTheme.ERROR,
};
Error.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

