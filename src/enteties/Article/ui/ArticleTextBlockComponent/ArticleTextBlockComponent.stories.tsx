import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
	title: 'enteties/ArticleTextBlockComponent',
	component: ArticleTextBlockComponent,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
