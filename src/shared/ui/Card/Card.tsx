import React, { FC, HTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
	NORMAL = 'normal',
	OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
	theme?: CardTheme;
}

export const Card: FC<CardProps> = memo((props) => {
	const { className, children, theme = CardTheme.NORMAL, ...other } = props;

	return (
		<div
			className={classNames(cls.Card, {}, [className, cls[theme]])}
			{...other}
		>
			{children}
		</div>
	);
});

