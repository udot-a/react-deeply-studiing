import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'pages/ForbiddenPage',
	component: ForbiddenPage,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ForbiddenPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;

export const AboutDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AboutDark.args = {};
AboutDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK), ReduxDecorator({}), RouterDecorator];

export const AboutLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AboutLight.args = {};
AboutLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT), ReduxDecorator({}), RouterDecorator];
