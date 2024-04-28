import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
	title: 'enteties/ArticleSortSelector',
	component: ArticleSortSelector,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
