import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// eslint-disable-next-line udot-project-plugin/path-checker
import { Text } from 'shared/ui/Text';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
	title: 'shared/Card',
	component: Card,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Dark = Template.bind({});
Dark.args = {
	children: <Text title="Some title" text="Some text description" />
};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {
	children: <Text title="Some title" text="Some text description" />
};

Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
