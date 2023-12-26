import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const { t } = useTranslation();
  
	return (
		<div
			data-testid="login-modal-test"
			className={classNames(cls.loginForm, {}, [className])}
		>
			<Input placeholder={t('Username')} type="text" className={cls.inputWrapper} autofocus />
			<Input placeholder={t('Password')} type="text"  className={cls.inputWrapper} />
			<Button theme={ButtonTheme.BORDERED} className={cls.loginBtn}>
				{t('Enter')}
			</Button>
		</div>
	);
};

