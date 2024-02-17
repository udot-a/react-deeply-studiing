import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text';
import { IComment } from '../../model/types/IComment';

interface CommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
	const {
		className,
		comments,
		isLoading,
	} = props;

	const { t } = useTranslation();

	return (
		<div className={classNames(cls.CommentList, {}, [className])}>
			{comments?.length
				? comments.map((comment) => (
					<CommentCard
						key={comment.id}
						comment={comment}
						isLoading={isLoading}
						className={cls.comment}
					/>
				))
				: <Text text={t('There are no comments')} />
			}
		</div>
	);
});
