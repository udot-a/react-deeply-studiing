import { Menu } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import cls from './Dropdown.module.scss';
import { classNames } from '../../lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger?: ReactNode;
	direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
	'bottom left': cls.optionsBottomLeft,
	'bottom right': cls.optionsBottomRight,
	'top left': cls.optionsTopLeft,
	'top right': cls.optionsTopRight,
};

export const Dropdown = memo((props: DropdownProps) => {
	const {
		className,
		trigger,
		items,
		direction = 'bottom left',
	} = props;

	const menuClasses = mapDirectionClass[direction];

	return (
		<Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
			<Menu.Button className={cls.btn}>
				{trigger}
			</Menu.Button>
			<Menu.Items className={classNames(cls.menu, {}, [menuClasses])}>
				{items.map((item, idx) => {
					const content = ({ active } : {active: boolean}) => (
						<button
							type="button"
							onClick={item.onClick}
							className={classNames(cls.item, { [cls.active]: active }, [])}
							disabled={item.disabled}
						>
							{item.content}
						</button>
					);

					if (item.href) {

						return (
							<Menu.Item as={AppLink} to={item.href} key={`Menu Item ${idx}`} disabled={item.disabled}>
								{content}
							</Menu.Item>
						);
					}

					return (
						<Menu.Item as={Fragment} key={`Menu Item ${idx}`} disabled={item.disabled}>
							{content}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
});
