import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from '../../../../lib/classNames/classNames';
import { Button, ButtonTheme } from '../../../Button';
import { HStack } from '../../../Stack';
import { DropdownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  onChange: (value: string) => void;
  direction?: DropdownDirection;
  label?: string;
}

export const ListBox = memo((props: ListBoxProps) => {
	const {
		items,
		className,
		value,
		defaultValue,
		onChange,
		readonly,
		direction = 'bottom right',
		label,
	} = props;

	return (
		<HStack gap={'4'}>
			{label && <span>{`${label}>`}</span>}
			<HListbox
				disabled={readonly}
				as="div"
				value={value}
				onChange={onChange}
				className={classNames(popupCls.popup, {}, [className])}
			>
				<HListbox.Button disabled={readonly}>
					{/*<Button theme={ButtonTheme.BORDERED} disabled={readonly}>*/}
					{value ?? defaultValue}
					{/*</Button>*/}
				</HListbox.Button>

				<HListbox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
					{items?.map((item) => (
						<HListbox.Option
							key={item.value}
							value={item.value}
							disabled={item.disabled}
							as={Fragment}
						>
							{({ active, selected }) => (
								<li
									className={
										classNames(cls.item, {
											[popupCls.active]: active,
											[popupCls.disabled]: item.disabled,
										})
									}
								>
									{selected && 'X '}
									{item.content}
								</li>
							)}
						</HListbox.Option>
					))}
				</HListbox.Options>
			</HListbox>
		</HStack>

	);
});
