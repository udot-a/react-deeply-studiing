import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from './Tabs';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { action } from '@storybook/addon-actions';

export default {
	title: 'shared/Tabs',
	component: Tabs,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Dark = Template.bind({});
Dark.args = {
	tabs: [
		{ value: 'tab1', content: 'First' },
		{ value: 'tab2', content: 'Second' },
		{ value: 'tab3', content: 'Third' },
	],
	value: 'tab2',
	onTabClick: action('onTabClick'),
};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

// export const Light = Template.bind({});
// Light.args = {};
//
// Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
