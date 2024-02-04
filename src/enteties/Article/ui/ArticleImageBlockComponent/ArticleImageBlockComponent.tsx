import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import { Text, TextAlign } from 'shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
	block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(({ className, block }) => {
	return (
		<div className={classNames('', {}, [className])}>
			<img src={block.src} className={cls.img} alt="Block Image"/>
			{block.title && (
				<Text text={block.title} align={TextAlign.CENTER}/>
			)}
		</div>
	);
});

