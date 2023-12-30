import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUsername';
import { TextTheme, Text } from 'shared/ui/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducerList =  {
	loginForm: loginReducer,
};

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();


	const { username, password, error, isLoading } = useSelector(getLoginState);
	
	const onChangeUserName = useCallback((value) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, username, password ]);

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterRemount>
			<div
				data-testid="login-modal-test"
				className={classNames(cls.loginForm, {}, [className])}
			>
				<Text title={t('Authorization form')}/>
				{error && <Text text={t('You have typed incorrect login or password')} theme={TextTheme.ERROR}/>}
				<Input
					placeholder={t('Username')}
					type="text"
					onChange={onChangeUserName}
					value={username}
					className={cls.inputWrapper} autofocus
				/>
				<Input
					placeholder={t('Password')}
					type="text"
					onChange={onChangePassword}
					value={password}
					className={cls.inputWrapper}
				/>
				<Button
					theme={ButtonTheme.BORDERED}
					onClick={onLoginClick}
					className={cls.loginBtn}
					disabled={isLoading}
				>
					{t('Enter')}
				</Button>
			</div>
		</DynamicModuleLoader>

	);
});

export default LoginForm;
