import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
	BORDERED = 'bordered',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ButtonTheme.CLEAR,
		square,
		size,
		...other
	} = props;

	const mods: Record<string, boolean> = {
		[cls.square]: square,
	};

	return (
		<button 
			className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
			{...other}
		>
			{children}
		</button>
	);
};

