import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { reduxDecoratorData } from 'shared/config/storybook/TestData/reduxDecoratorData';

export default {
	title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
	component:ArticleDetailsPageHeader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

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
	RouterDecorator];

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [
	StyleDecorator,
	ThemeDecorator(Theme.LIGHT),
	ReduxDecorator({ articleDetails: { error: '', isLoading: false, data: reduxDecoratorData } }),
	RouterDecorator
];
