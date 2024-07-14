import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import withMock from 'storybook-addon-mock';
import { Article } from 'enteties/Article';

export default {
	title: 'features/ArticleRecommendationsList',
	component: ArticleRecommendationsList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const article: Article = {
	id: '1',
	img: '',
	createdAt: '',
	views: 123,
	user: { id: '1', username: '123' },
	blocks: [],
	type: [],
	title: '123',
	subtitle: 'asfsa',
};

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK), ReduxDecorator({ addCommentForm: {
	text: 'Test comment 1',
} }), RouterDecorator];
Dark.parameters = {
	mockData: [
		{
			url: `${__API__}/articles?_limit=3`,
			method: 'GET',
			status: 200,
			response: [
				{ ...article, id: '1' },
				{ ...article, id: '2' },
				{ ...article, id: '3' },
			],
		},
	],
};
