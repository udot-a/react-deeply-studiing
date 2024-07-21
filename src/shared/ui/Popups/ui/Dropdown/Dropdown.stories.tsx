import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from '../../../../config/storybook/StyleDecorator/StyleDecorator';
import { Button, ButtonTheme } from '../../../Button';

export default {
	title: 'shared/Dropdown',
	component: Dropdown,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Dark = Template.bind({});
Dark.args = {
	trigger: <Button theme={ButtonTheme.BORDERED}>{'Open'}</Button>,
	items: [
		{
			content: 'First',
		},
		{
			content: 'Second',
		},
		{
			content: 'Third',
		},
		{
			content: 'Fourth',
		},
	],
	direction: 'bottom right',
};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {
	trigger: <Button theme={ButtonTheme.BORDERED}>{'Open'}</Button>,
	items: [
		{
			content: 'First',
		},
		{
			content: 'Second',
		},
		{
			content: 'Third',
		},
		{
			content: 'Fourth',
		},
	],
	direction: 'bottom right',
};

Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
