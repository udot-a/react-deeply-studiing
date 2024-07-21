import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { useNotificationsList } from '../../api/notificationApi';
import { VStack } from 'shared/ui/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from 'shared/Skeleton/Skeleton';

interface NotificationListProps {
  className?: string;
}

export const NotificationList: FC<NotificationListProps> = memo((props) => {
	const { className } = props;
	const { data, isLoading } = useNotificationsList(undefined, {
		pollingInterval: 5000,
	});

	if (isLoading) {
		return (
			<VStack
				gap="16"
				max
				className={classNames(cls.NotificationList, {}, [className])}
			>
				<Skeleton width="300px" border="8px" height="80px" />
				<Skeleton width="300px" border="8px" height="80px" />
				<Skeleton width="300px" border="8px" height="80px" />
			</VStack>
		);
	}

	return (
		<VStack
			gap="16"
			max
			className={classNames(cls.NotificationList, {}, [className])}
		>
			{data?.map(item => (
				<NotificationItem key={item.id} item={item} />
			))}
		</VStack>
	);
});

