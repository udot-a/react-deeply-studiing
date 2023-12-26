import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'shared/Input',
	component: Input,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputDark.args = {
	placeholder: 'input_dark',
	value: 'some value',
};
InputDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const InputLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputLight.args = {
	placeholder: 'input_light',
	value: 'some value',
};
InputLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
