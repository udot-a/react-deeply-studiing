import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<div className={classNames(cls.pageError, {}, [className])}>
			<p>{t('Oops, somethings wrong happens!!!')}</p>
			<Button theme={ButtonTheme.BORDERED} onClick={reloadPage} className={cls.button}>
				{t('Update the page')}
			</Button>
		</div>
	);
};

