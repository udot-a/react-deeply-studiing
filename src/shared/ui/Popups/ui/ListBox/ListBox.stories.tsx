import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
	title: 'shared/ListBox',
	component: ListBox,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Dark = Template.bind({});
Dark.args = {
	defaultValue: 'Choose value',
	onChange: () => {},
	value:undefined,
	items: [
		{ value: '1', content: '1 item sfdsfsdfsdfdsf' },
		{ value: '2', content: '2 item' },
		{ value: '3', content: '3 item' },
		{ value: '4', content: '4 item', disabled: true },
	],
};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {
	defaultValue: 'Choose value',
	onChange: () => {},
	value:undefined,
	items: [
		{ value: '1', content: '1 item sfdsfsdfsdfdsf' },
		{ value: '2', content: '2 item' },
		{ value: '3', content: '3 item' },
		{ value: '4', content: '4 item', disabled: true },
	],
};

Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
