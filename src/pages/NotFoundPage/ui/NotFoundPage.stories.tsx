import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof NotFoundPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const NotFoundDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotFoundDark.args = {};
NotFoundDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK), ReduxDecorator({}), RouterDecorator];

export const NotFoundLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotFoundLight.args = {};
NotFoundLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT), ReduxDecorator({}), RouterDecorator];
