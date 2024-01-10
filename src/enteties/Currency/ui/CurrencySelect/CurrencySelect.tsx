import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency,
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

const options=[
	{ value: Currency.EUR, content: 'Euro' },
	{ value: Currency.UAH, content: 'Grivnas' },
	{ value: Currency.USD, content: 'Dollar' },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo(({ className, value, onChange, readOnly }) => {
	const { t } = useTranslation();

	const handleSelectChange = useCallback((v: string) => {
		onChange?.(v as Currency);
	}, [onChange]);
  
	return (
		<Select 
			label={t('Choose currency')}
			options={options}
			readOnly={readOnly}
			value={value}
			onChange={handleSelectChange}
			className={classNames('', {}, [className])}
		/>
	);
});

