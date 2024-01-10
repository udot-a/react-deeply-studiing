import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { Country } from '../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country,
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

const options=[
	{ value: Country.Ukraine, content: Country.Ukraine },
	{ value: Country.USA, content: Country.USA },
	{ value: Country.Canada, content: Country.Canada },
	{ value: Country.Britain, content: Country.Britain },
	{ value: Country.China, content: Country.China },
];

export const CountrySelect: FC<CountrySelectProps> = memo(({ className, value, onChange, readOnly }) => {
	const { t } = useTranslation();

	const handleSelectChange = useCallback((v: string) => {
		onChange?.(v as Country);
	}, [onChange]);

	return (
		<Select
			label={t('Choose country')}
			options={options}
			readOnly={readOnly}
			value={value}
			onChange={handleSelectChange}
			className={classNames('', {}, [className])}
		/>
	);
});

