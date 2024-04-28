import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from 'shared/ui/Card/Card';

export interface TabItem<T extends string> {
  value: T;
  content: string;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>  (props: TabsProps<T>) => {
	const { className, tabs, value, onTabClick } = props;

	const clickHandler = useCallback((tab: TabItem<T>) => {
		return () => {
			onTabClick(tab);
		};
	}, [onTabClick]);

	return (
		<div className={classNames(cls.Tabs, {}, [className])}>
			{tabs.map((tab, i) => (
				<Card 
					key={`TAB ITEM ${i}`} 
					className={cls.tab}
					theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
					onClick={clickHandler(tab)}
				>
					{tab.content}
				</Card>
			))}
		</div>
	);
};

