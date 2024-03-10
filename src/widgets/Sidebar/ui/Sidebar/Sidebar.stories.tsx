import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'widgets/Sidebar',
	component: Sidebar,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Sidebar>;

// More ¡on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {};
Light.decorators = [
	StyleDecorator,
	ThemeDecorator(Theme.DARK),
	ReduxDecorator({ loginForm: { username: 'Dron', password: 'qwerty123', isLoading: false } }),
	RouterDecorator,
];

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {};
Dark.decorators = [
	StyleDecorator,
	ThemeDecorator(Theme.LIGHT),
	ReduxDecorator({ loginForm: { username: 'Dron', password: 'qwerty123', isLoading: false }, user: { authData: { id: '1' } } }),
	RouterDecorator,
];
