import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'shared/Loader',
	component: Loader,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Loader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoaderDark.args = {};
LoaderDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const LoaderLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoaderLight.args = {};
LoaderLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
