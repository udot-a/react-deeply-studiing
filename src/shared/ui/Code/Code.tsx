import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button';
import CopyIcon from '../../assets/icons/copy.svg';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = memo(({ className, text }) => {

	const handleCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={classNames(cls.Code, {}, [className])}>
			<Button
				className={cls.copyBtn}
				theme={ButtonTheme.CLEAR}
				onClick={handleCopy}
			>
				<CopyIcon />
			</Button>
			<code >
				{text}
			</code>
		</pre>

	);
});

