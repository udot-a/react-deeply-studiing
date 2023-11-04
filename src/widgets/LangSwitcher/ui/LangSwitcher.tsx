import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};
	return (
		<div className={classNames(cls.langSwitcher, {}, [className])}>
			<Button
				theme={ThemeButton.CLEAR}
				className={classNames(cls.langSwitcher, {}, [className])}
				onClick={toggleLanguage}>
				{t('lang')}
			</Button>
		</div>
	);
};

