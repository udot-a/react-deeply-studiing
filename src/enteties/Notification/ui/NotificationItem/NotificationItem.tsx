import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notifications';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text';

interface NotificationItemProps {
  className?: string;
	item: Notification;
}

export const NotificationItem: FC<NotificationItemProps> = memo((props) => {
	const { className, item } = props;

	const content = (
		<Card theme={CardTheme.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
			<Text title={item.title} text={item.description} />
		</Card>
	);

	if (item.href) {
		return (
			<a
				className={cls.link}
				href={item.href}
				target="_blank"
				rel="noreferrer"
			>
				<Card theme={CardTheme.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
					<Text title={item.title} text={item.description} />
				</Card>
			</a>
		);
	}
	return content;
});

