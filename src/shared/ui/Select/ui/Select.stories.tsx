import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'shared/Select',
	component: Select,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectDark = Template.bind({});
SelectDark.args = {
	label: 'Select number',
	options: [
		{ value: '1', content: 'First' },
		{ value: '2', content: 'Second' },
		{ value: '3', content: 'Third' },
	],
};
SelectDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const SelectLight = Template.bind({});
SelectLight.args = {
	label: 'Select number',
	options: [
		{ value: '1', content: 'First' },
		{ value: '2', content: 'Second' },
		{ value: '3', content: 'Third' },
	],
};
SelectLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
