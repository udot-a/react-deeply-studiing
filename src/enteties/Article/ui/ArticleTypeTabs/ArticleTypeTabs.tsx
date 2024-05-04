import React, { FC, memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'enteties/Article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props) => {
	const { className, value, onChangeType } = props;
	const { t } = useTranslation();

	const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
		{
			value: ArticleType.ALL,
			content: t('All'),
		},
		{
			value: ArticleType.IT,
			content: t('IT'),
		},{
			value: ArticleType.ECONOMICS,
			content: t('Economics'),
		},{
			value: ArticleType.SCIENCE,
			content: t('Science'),
		},
	], [t]);

	const handleChangeType = useCallback((tab: TabItem<ArticleType>) => {
		onChangeType(tab.value);
	}, [onChangeType]);
	return (
		<Tabs
			tabs={typeTabs}
			value={value}
			onTabClick={handleChangeType}
			className={classNames('', {}, [className])}
		/>
	);
});

