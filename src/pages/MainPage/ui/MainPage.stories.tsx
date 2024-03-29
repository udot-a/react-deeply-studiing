import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { StateSchema } from 'app/providers/StoreProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

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
const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

const initialState: DeepPartial<StateSchema> = {
	counter: {
		value: 11,
	},
};

export const MainDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainDark.args = {};
MainDark.decorators = [ReduxDecorator(initialState as StateSchema), RouterDecorator, StyleDecorator, ThemeDecorator(Theme.DARK)];

export const MainLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainLight.args = {};
MainLight.decorators = [ReduxDecorator(initialState as StateSchema), RouterDecorator, StyleDecorator, ThemeDecorator(Theme.LIGHT)];
