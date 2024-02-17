import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
	title: 'enteties/CommentList',
	component: CommentList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {
	comments: [
		{
			id: '1',
			text: 'Comment 1',
			user: {
				username: 'Andrii',
				id: '1',
			},
		},
		{
			id: '2',
			text: 'Comment 2',
			user: {
				username: 'Andrii',
				id: '2',
			},
		},
	]
};

Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const Skeleton = Template.bind({});
Skeleton.args = {
	isLoading: true,
	comments: [
		{
			id: '1',
			text: 'Comment 1',
			user: {
				username: 'Andrii',
				id: '1',
			},
		},
		{
			id: '2',
			text: 'Comment 2',
			user: {
				username: 'Andrii',
				id: '2',
			},
		},
	]
};

Skeleton.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
