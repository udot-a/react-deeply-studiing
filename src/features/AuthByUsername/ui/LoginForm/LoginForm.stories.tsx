import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'shared/LoginForm',
	component: LoginForm,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof LoginForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {};
LoginFormDark.decorators = [
	SuspenseDecorator,
	StyleDecorator,
	ThemeDecorator(Theme.DARK),
	ReduxDecorator({ loginForm: { username: 'Dron', password: 'qwerty123', isLoading: false, error: 'Error happens' } }),
];

export const LoginFormLight = Template.bind({});
LoginFormLight.args = {};
LoginFormLight.decorators = [
	SuspenseDecorator,
	StyleDecorator,
	ThemeDecorator(Theme.LIGHT),
	ReduxDecorator({ loginForm: { username: 'Dron', password: 'qwerty123', isLoading: true } }),
];
