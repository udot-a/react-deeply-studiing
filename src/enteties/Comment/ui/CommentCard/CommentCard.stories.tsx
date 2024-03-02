import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';

export default {
	title: 'enteties/CommentCard',
	component: CommentCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Dark = Template.bind({});
Dark.args = {
	isLoading: false,
	comment: {
		id: '1',
		text: 'Comment 1',
		user: {
			username: 'Andrii',
			id: '1',
		},
	},
};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK), ReduxDecorator({}), RouterDecorator];

export const Light = Template.bind({});
Light.args = {
	isLoading: true,
};

Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
