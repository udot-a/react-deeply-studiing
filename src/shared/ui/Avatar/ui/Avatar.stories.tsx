import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import testAvatarImg from './test_avatar_img.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'shared/Avatar',
	component: Avatar,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarLarge = Template.bind({});
AvatarLarge.args = {
	size: 200,
	src: testAvatarImg,
};
AvatarLarge.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const AvatarSmall = Template.bind({});
AvatarSmall.args = {
	size: 50,
	src: testAvatarImg,
};
AvatarSmall.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
