import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

import { ArticleView } from '../../model/consts/consts';

export default {
	title: 'enteties/ArticleList',
	component: ArticleList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const IsLoadingBig = Template.bind({});
IsLoadingBig.args = {
	isLoading: true,
	view: ArticleView.BIG,
};
IsLoadingBig.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const IsLoadingSmall = Template.bind({});
IsLoadingSmall.args = {
	isLoading: true,
	view: ArticleView.SMALL,
};

IsLoadingSmall.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
