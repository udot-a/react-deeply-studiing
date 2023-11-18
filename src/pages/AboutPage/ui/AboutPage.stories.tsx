import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutPage from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'pages/AboutPage',
	component: AboutPage,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AboutPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const AboutDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AboutDark.args = {};
AboutDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const AboutLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AboutLight.args = {};
AboutLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
