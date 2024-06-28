import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
	title: 'shared/Flex',
	component: Flex,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
	children: (
		<>
			<div>{'First'}</div>
			<div>{'Second'}</div>
			<div>{'Third'}</div>
			<div>{'Fourth'}</div>
		</>
	)
};
Row.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const RowGap4 = Template.bind({});
RowGap4.args = {
	gap: '4',
	children: (
		<>
			<div>{'First'}</div>
			<div>{'Second'}</div>
			<div>{'Third'}</div>
			<div>{'Fourth'}</div>
		</>
	)
};
RowGap4.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const Column = Template.bind({});
Column.args = {
	direction: 'column',
	children: (
		<>
			<div>{'First'}</div>
			<div>{'Second'}</div>
			<div>{'Third'}</div>
			<div>{'Fourth'}</div>
		</>
	)
};

Column.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
