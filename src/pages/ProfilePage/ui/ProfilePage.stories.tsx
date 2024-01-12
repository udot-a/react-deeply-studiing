import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import testAvatar from 'shared/assets/tests/test_avatar_img.png';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';


export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
	SuspenseDecorator,
	StyleDecorator,
	ThemeDecorator(Theme.LIGHT),
	ReduxDecorator({ profile: {
		form: {
			'first': 'Andrii',
			'last': 'Udot',
			'age': 45,
			'city': 'Kharkiv',
			'country': Country.Britain,
			'currency': Currency.USD,
			avatar: testAvatar,
		}
	} }),
	RouterDecorator,
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
	SuspenseDecorator,
	StyleDecorator,
	ThemeDecorator(Theme.DARK),
	ReduxDecorator({ profile: {
		form: {
			'first': 'Andrii',
			'last': 'Udot',
			'age': 45,
			'city': 'Kharkiv',
			'country': Country.Britain,
			'currency': Currency.USD,
			avatar: testAvatar,
		}
	} }),
	RouterDecorator,
];
