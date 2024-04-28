import React, { FC, memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { SelectOption } from 'shared/ui/Select/ui/Select';
import { ArticleSortField } from 'enteties/Article';
import { SortOrder } from 'shared/types';

interface ArticleSortSelectorProps {
  className?: string;
	sort: ArticleSortField;
	order: SortOrder;
	onChangeOrder: (order: SortOrder) => void;
	onChangeSort: (order: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((props) => {
	const {
		className,
		sort,
		order,
		onChangeOrder,
		onChangeSort,
	} = props;
	const { t } = useTranslation();

	const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
		{
			value: 'asc',
			content: t('ascending')
		},
		{
			value: 'desc',
			content: t('descending')
		},
	], [t]);

	const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
		{
			value: ArticleSortField.CREATED,
			content: t('date of creation')
		},
		{
			value: ArticleSortField.TITLE,
			content: t('naming')
		},
		{
			value: ArticleSortField.VIEWS,
			content: t('views')
		},
	], [t]);

	return (
		<div className={classNames(cls.ArticleSortSelector, {}, [className])}>
			<Select
				label={t('Sort by')}
				options={sortFieldOptions}
				value={sort}
				onChange={onChangeSort}
			/>
			<Select
				label={t('by')}
				options={orderOptions}
				value={order}
				onChange={onChangeOrder}
				className={cls.order}
			/>
		</div>
	);
});

