import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'pages/MainPage',
	component: MainPage,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MainPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const MainDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainDark.args = {};
MainDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const MainLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainLight.args = {};
MainLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
