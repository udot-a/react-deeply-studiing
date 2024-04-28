import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import {
	getAddCommentFormText
} from '../../model/selectors/addCommentFormSelector';
import { useAppDispatch } from 'shared/lib/hooks';
import { addCommentFormSActions, addCommentFormSReducer } from '../../model/slices/addCommentFormSlice';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface AddCommentFormProps {
  className?: string;
	onSendComment?: (text: string) => void;
}

const reducers: ReducerList = {
	addCommentForm: addCommentFormSReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = memo(({ className, onSendComment }) => {
	const { t } = useTranslation();
	const text = useSelector(getAddCommentFormText);

	const dispatch = useAppDispatch();

	const handleCommentChange = useCallback((value: string) => {
		dispatch(addCommentFormSActions.setText(value));
	}, [dispatch]);

	const handleSendPress = useCallback(() => {
		onSendComment?.(text);
		handleCommentChange('');
	}, [onSendComment, text, handleCommentChange]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterRemount>
			<div className={classNames(cls.AddCommentForm, {}, [className])}>
				<Input
					placeholder={t('Type comment here')}
					value={text}
					onChange={handleCommentChange}
					className={cls.input}
				/>
				<Button
					theme={ButtonTheme.BORDERED}
					onClick={handleSendPress}
				>
					{t('Send')}
				</Button>
			</div>
		</DynamicModuleLoader>
	);
});

export default AddCommentForm;
