import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({ className }) => {
	return (
		<div className={classNames('', {}, [className])}>

		</div>
	);
};

