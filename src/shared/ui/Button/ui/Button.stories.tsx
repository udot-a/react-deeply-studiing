import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'shared/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClearDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClearDark.args = {
	theme: ThemeButton.CLEAR,
	children: 'TOGGLE',
};
ClearDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const ClearLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClearLight.args = {
	theme: ThemeButton.CLEAR,
	children: 'TOGGLE',
};
ClearLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];


export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	theme: ThemeButton.BORDERED,
	children: 'TOGGLE',
};
PrimaryDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
	theme: ThemeButton.BORDERED,
	children: 'TOGGLE',
};
PrimaryLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
