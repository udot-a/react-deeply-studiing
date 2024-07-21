import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import withMock from 'storybook-addon-mock';
import { Notification } from '../../model/types/notifications';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';

const notifications: Notification[] = [
	{
		'id': '1',
		'title': 'Уведомление 1',
		'description': 'Произошло какое-то событие',
	},
	{
		'id': '2',
		'title': 'Уведомление 2',
		'description': 'Произошло какое-то событие',
		'href': 'http://localhost:3000/admin'
	},
	{
		'id': '3',
		'title': 'Уведомление 3',
		'description': 'Произошло какое-то событие',
		'href': 'http://localhost:3000/admin'
	},
];
export default {
	title: 'enteties/NotificationList',
	component: NotificationList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK), ReduxDecorator({})];
Dark.parameters = {
	mockData: [
		{
			url: `${__API__}/notifications`,
			method: 'GET',
			status: 200,
			response: notifications,
		},
	],
};
