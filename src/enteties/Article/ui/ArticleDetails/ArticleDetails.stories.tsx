import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
	title: 'enteties/ArticleDetails',
	component: ArticleDetails,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK), ReduxDecorator({ articleDetails: { error: 'error ', isLoading: false } }), RouterDecorator];

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT), ReduxDecorator({ articleDetails: { isLoading: true } }), RouterDecorator];
