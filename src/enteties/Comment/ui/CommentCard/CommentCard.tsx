import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { IComment } from '../../model/types/IComment';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/Skeleton/Skeleton';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface CommentCardProps {
  className?: string;
	comment?: IComment;
	isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
	const {
		className,
		comment,
		isLoading,
	} = props;

	if (isLoading) {
		return (
			<div className={classNames(cls.CommentCard, {}, [className])}>
				<div className={cls.header}>
					<Skeleton width={30} height={30} border="50%"/>
					<Skeleton width={100} height={16} className={cls.username}/>
				</div>

				<Skeleton width="100%" height={50} className={cls.text}/>
			</div>
		);
	}

	return (
		<div className={classNames(cls.CommentCard, {}, [className])}>
			<AppLink to={`${RoutePath.profile}${comment?.user?.id}`} className={cls.header}>
				<Avatar size={30} src={comment?.user?.avatar} />
				<Text title={comment?.user?.username} className={cls.username}/>
			</AppLink>
			<Text text={comment?.text} className={cls.text}/>
		</div
		>
	);
});

