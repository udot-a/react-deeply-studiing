import React, { ChangeEvent, FC, InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input: FC<InputProps> = (props) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		...otherProps
	} = props;

	const inputRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [caretPosition, setCaretPosition] = useState(0);

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			inputRef.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		setCaretPosition(e.target.value.length);
	}, [onChange]);

	const onBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

	const onFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const onSelect = useCallback((e: any) => {
		setCaretPosition(e?.target?.selectionStart);
	}, []);

	return (
		<div className={classNames(cls.inputWrapper, {}, [className])}>
			{!!placeholder && (
				<div className={cls.placeholder}>
					{`${placeholder}>`}
				</div>
			)}
			<div className={cls.caretWrapper}>
				<input
					ref={inputRef}
					type={type}
					value={value}
					onChange={onChangeHandler}
					onBlur={onBlur}
					onFocus={onFocus}
					onSelect={onSelect}
					className={cls.input}
					{...otherProps}
				/>
				{isFocused && <span className={cls.caret}
					style={{ left: `${caretPosition * 9.5}px` }}/>}
			</div>
		</div>
	);
};

