import React, { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
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
	disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {
	const {
		className,
		children,
		theme = ButtonTheme.CLEAR,
		square,
		size = ButtonSize.M,
		disabled = false,
		...other
	} = props;

	const mods: Record<string, boolean | undefined> = {
		[cls.square]: square,
		[cls.disabled]: disabled,
	};

	return (
		<button 
			className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
			disabled={disabled}
			{...other}
		>
			{children}
		</button>
	);
});
