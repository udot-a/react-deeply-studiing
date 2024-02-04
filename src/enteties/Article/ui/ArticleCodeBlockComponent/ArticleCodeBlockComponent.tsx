import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../model/types/article';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
  className?: string;
	block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo(({ className, block }) => {
	return (
		<div className={classNames('', {}, [className])}>
			<Code text={block.code} />
		</div>
	);
});

