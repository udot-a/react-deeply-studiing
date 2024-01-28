import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
	title: 'shared/Skeleton',
	component: Skeleton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const Normal = Template.bind({});
Normal.args = {
	width: '100%',
	height: 200,
};

Normal.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const Circle = Template.bind({});
Circle.args = {
	border: '50%',
	height: 100,
	width: 100,
};

Circle.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
