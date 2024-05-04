import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { reduxDecoratorData } from 'shared/config/storybook/TestData/reduxDecoratorData';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
	title: 'pages/ArticleEditPage',
	component: ArticleEditPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
	StyleDecorator,
	ThemeDecorator(Theme.DARK),
	ReduxDecorator({
		user: {
			authData: {
				id: '1',
				username: 'Vasyl',
			},
		},
		articleDetails: { error: '', isLoading: false, data: reduxDecoratorData } }),
	RouterDecorator,
];

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [
	StyleDecorator, 
	ThemeDecorator(Theme.LIGHT),
	ReduxDecorator({
		user: {
			authData: {
				id: '1',
				username: 'Vasyl',
			},
		},
		articleDetails: { error: '', isLoading: false, data: reduxDecoratorData } }),
	RouterDecorator,
];
