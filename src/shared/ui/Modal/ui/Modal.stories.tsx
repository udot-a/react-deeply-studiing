import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Modal } from 'shared/ui/Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'shared/Modal',
	component: Modal,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const PrimaryLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryLight.args = {
	isOpen: true,
	children: 'There is Modal Content Body'	,
};
PrimaryLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryDark.args = {
	isOpen: true,
	children: 'There is Modal Content Body'	,
};
PrimaryDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];
