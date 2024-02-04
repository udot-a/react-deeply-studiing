import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
	title: 'shared/Code',
	component: Code,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Dark = Template.bind({});
Dark.args = {
	text: 'import React from \'react\';\n' +
		'import { ComponentMeta, ComponentStory } from \'@storybook/react\';\n' +
		'import { Code } from \'./Code\';\n' +
		'import { ThemeDecorator } from \'shared/config/storybook/ThemeDecorator/ThemeDecorator\';\n' +
		'import { Theme } from \'app/providers/ThemeProvider\';\n' +
		'import { StyleDecorator } from \'shared/config/storybook/StyleDecorator/StyleDecorator\';\n' +
		'\n' +
		'export default {\n' +
		'\ttitle: \'shared/Code\',\n' +
		'\tcomponent: Code,\n' +
		'\targTypes: {\n' +
		'\t\tbackgroundColor: { control: \'color\' },\n' +
		'\t},\n' +
		'} as ComponentMeta<typeof Code>;\n' +
		'\n' +
		'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
		'\n' +
		'export const Dark = Template.bind({});\n' +
		'Dark.args = {\n' +
		'\tchildren: \'\'\n' +
		'};\n' +
		'Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];\n' +
		'\n' +
		'export const Light = Template.bind({});\n' +
		'Light.args = {};\n' +
		'\n' +
		'Light.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];\n'
};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

