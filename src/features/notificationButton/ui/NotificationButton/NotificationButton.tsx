import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { useTranslation } from 'react-i18next';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import Notification from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'enteties/Notification';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
	const { className } = props;

	return (
		<Popover
			className={classNames('', {}, [className])}
			direction="bottom left"
			trigger={(<Button theme={ButtonTheme.CLEAR}>
				<Icon Svg={Notification} inverted />
			</Button>
			)}
		>
			<NotificationList className={cls.notifications} />
		</Popover>
	);
});

