import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './Popover';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { VStack } from '../../../Stack';

export default {
	title: 'shared/Popover',
	component: Popover,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args}>
	<VStack gap="16">
		<div>{'Content 1'}</div>
		<div>{'Content 2'}</div>
		<div>{'Content 3'}</div>
	</VStack>
</Popover>;

export const Dark = Template.bind({});
Dark.args = {
	trigger: 'Show popover'
};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {
	trigger: 'Show popover'
};

Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
