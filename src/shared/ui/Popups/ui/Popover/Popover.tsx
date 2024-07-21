import React, { FC, memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface PopoverProps {
  className?: string;
  trigger?: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export const Popover: FC<PopoverProps> = memo((props) => {
	const {
		className,
		direction = 'bottom right',
		trigger,
		children,
	} = props;

	const menuClasses = mapDirectionClass[direction];

	return (
		<HPopover className={classNames('', {}, [popupCls.popup, className])}>
			<HPopover.Button as="div" className={popupCls.trigger}>
				{trigger}
			</HPopover.Button>
			<HPopover.Panel className={classNames(cls.panel, {}, [menuClasses])}>
				{children}
			</HPopover.Panel>
		</HPopover>
	);
});

