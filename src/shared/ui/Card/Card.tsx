import React, { FC, HTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
}

export const Card: FC<CardProps> = memo((props) => {
	const { className, children, ...other } = props;

	return (
		<div
			className={classNames(cls.Card, {}, [className])}
			{...other}
		>
			{children}
		</div>
	);
});

