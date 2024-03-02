import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { action } from '@storybook/addon-actions';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
	title: 'features/AddCommentForm',
	component: AddCommentForm,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Dark = Template.bind({});
Dark.args = {
	onSendComment: action('onSendComment')
};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK), ReduxDecorator({ addCommentForm: {
	text: 'Test comment 1',
} }), RouterDecorator];
