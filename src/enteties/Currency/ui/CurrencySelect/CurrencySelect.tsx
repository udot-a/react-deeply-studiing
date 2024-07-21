import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';

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
		<ListBox
			className={className}
			value={value}
			defaultValue={t('Pick currency')}
			items={options}
			onChange={handleSelectChange}
			readonly={readOnly}
			direction="top right"
			label={t('Pick currency')}
		/>
	);
});

