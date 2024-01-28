import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({ className }) => {
	return (
		<div className={classNames('', {}, [className])}>

		</div>
	);
};

