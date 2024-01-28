import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({ className }) => {
	return (
		<div className={classNames('', {}, [className])}>

		</div>
	);
};

