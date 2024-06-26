import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { StateSchema } from 'app/providers/StoreProvider';

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
	SuspenseDecorator,
	StyleDecorator,
	ThemeDecorator(Theme.DARK),
	ReduxDecorator({
		user: {
			authData: {
				id: '1',
				username: 'Vasyl',
			},
		},
		loginForm: { username: 'Dron', password: 'qwerty123', isLoading: false }
	}),
	RouterDecorator,
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
	SuspenseDecorator,
	StyleDecorator,
	ThemeDecorator(Theme.LIGHT),
	ReduxDecorator({ loginForm: { username: 'Dron', password: 'qwerty123', isLoading: false } } as StateSchema),
	RouterDecorator,
];
