import React, { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'enteties/Currency';

import { Country } from 'enteties/Country/model/types/country';
import { CountrySelect } from 'enteties/Country';
import { VStack } from 'shared/ui/Stack';

interface ProfileCardProps {
  className?: string;
	data?: Profile;
	error?: string;
	isLoading?: boolean;
	readonly?: boolean;
	onFirstNameChange?: (value?: string) => void;
	onAgeChange?: (value?: string) => void;
	onLastNameChange?: (value?: string) => void;
	onCityChange?: (value?: string) => void;
	onUsernameNameChange?: (value?: string) => void;
	onAvatarChange?: (value?: string) => void;
	onCurrencyChange?: (value: Currency) => void;
	onCountryChange?: (value: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
	const {
		className,
		data,
		error,
		isLoading,
		readonly,
		onFirstNameChange,
		onLastNameChange,
		onAgeChange,
		onCityChange,
		onAvatarChange,
		onUsernameNameChange,
		onCountryChange,
		onCurrencyChange,
	} = props;
	const { t } = useTranslation('profile');

	const mods: Mods = {
		[cls.editing]: !readonly,
	};

	if (isLoading) {
		return (
			<div className={classNames(cls.profileCard, mods, [className, cls.loading])}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames(cls.profileCard, mods, [className, cls.error])}>
				<Text
					theme={TextTheme.ERROR}
					title={t('Oops, somethings wrong happens!!!')}
					text={t('Please try to reload page')}
					align={TextAlign.CENTER}
				/>
			</div>
		);
	}
	return (
		<VStack max gap="16" className={classNames(cls.profileCard, mods, [className])}>
			<div className={cls.avatarWrapper}>
				{data?.avatar && <Avatar src={data?.avatar}/>}
			</div>
			<Input
				value={data?.first}
				placeholder={t('Your name')}
				className={cls.input}
				onChange={onFirstNameChange}
				readOnly={readonly}
			/>

			<Input
				value={data?.last}
				placeholder={t('Your surname')}
				className={cls.input}
				onChange={onLastNameChange}
				readOnly={readonly}
			/>

			<Input
				value={data?.age}
				placeholder={t('Your age')}
				className={cls.input}
				onChange={onAgeChange}
				readOnly={readonly}
			/>

			<Input
				value={data?.city}
				placeholder={t('City')}
				className={cls.input}
				onChange={onCityChange}
				readOnly={readonly}
			/>

			<Input
				value={data?.username}
				placeholder={t('Nickname')}
				className={cls.input}
				onChange={onUsernameNameChange}
				readOnly={readonly}
			/>

			<Input
				value={data?.avatar}
				placeholder={t('Avatar')}
				className={cls.input}
				onChange={onAvatarChange}
				readOnly={readonly}
			/>

			<CurrencySelect
				value={data?.currency}
				onChange={onCurrencyChange}
				readOnly={readonly}
				className={cls.input}
			/>

			<CountrySelect
				value={data?.country}
				onChange={onCountryChange}
				readOnly={readonly}
				className={cls.input}
			/>
		</VStack>
	);
};

