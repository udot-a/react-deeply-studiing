import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from './StarRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '@/shared/const/theme';

export default {
	title: 'shared/StarRating',
	component: StarRating,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Dark = Template.bind({});
Dark.args = {
	size: 30,
};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
