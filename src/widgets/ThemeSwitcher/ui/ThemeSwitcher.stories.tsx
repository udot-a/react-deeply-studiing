import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'widgets/ThemeSwitcher',
	component: ThemeSwitcher,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ThemeSwitcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const SwitcherDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SwitcherDark.args = {};
SwitcherDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const SwitcherLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SwitcherLight.args = {};
SwitcherLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
