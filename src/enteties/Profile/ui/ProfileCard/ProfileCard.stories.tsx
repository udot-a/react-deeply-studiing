import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import testAvatar from 'shared/assets/tests/test_avatar_img.png';

export default {
	title: 'enteties/ProfileCard',
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	data: {
		'first': 'Andrii',
		'last': 'Udot',
		'age': 45,
		'city': 'Kharkiv',
		'country': Country.Britain,
		'currency': Currency.USD,
		avatar: testAvatar,
	}
};
Primary.decorators = [
	SuspenseDecorator,
	StyleDecorator,
	ThemeDecorator(Theme.DARK),
	RouterDecorator,
];

export const WithError = Template.bind({});
WithError.args = {
	error: 'true',
};
WithError.decorators = [
	SuspenseDecorator,
	StyleDecorator,
	ThemeDecorator(Theme.DARK),
	RouterDecorator,
];

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
};
Loading.decorators = [
	SuspenseDecorator,
	StyleDecorator,
	ThemeDecorator(Theme.DARK),
	RouterDecorator,
];

