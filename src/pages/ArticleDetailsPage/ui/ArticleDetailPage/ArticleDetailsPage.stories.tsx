import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
	title: 'pages/ArticleDetailsPage',
	component: ArticleDetailsPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
