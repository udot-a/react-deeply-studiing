import React, { ChangeEvent, FC, memo, useCallback, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}
interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
	readOnly?: boolean;
}

export const Select: FC<SelectProps> = memo((props) => {
	const { className, label, options, onChange, value, readOnly } = props;
  
	const mods: Mods = {};

	const optionList = useMemo(() => {
		return options.map((opt) => (
			<option
				key={opt.value}
				value={opt.value}
				className={cls.option}
			>
				{opt.content}
			</option>
		));
	}, [options]);

	const handleSelectChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value);
	}, [onChange]);

	return (
		<div className={classNames(cls.wrapper, mods, [className])}>
			{label && <span className={cls.label}>
				{`${label}>`}
			</span>}
			<select
				onChange={handleSelectChange}
				value={value}
				className={cls.select}
				disabled={readOnly}
			>
				{optionList}
			</select>
		</div>
	);
});

