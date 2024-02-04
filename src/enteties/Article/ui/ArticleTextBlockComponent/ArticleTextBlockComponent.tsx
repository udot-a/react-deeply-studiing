import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';
import { Text } from 'shared/ui/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
	block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo((props) => {
	const { block, className } = props;

	return (
		<div className={classNames('', {}, [className])}>
			{block.title && (
				<Text
					title={block.title}
					className={cls.title}
				/>
			)}
			{block.paragraphs.map((paragraph: string) => (
				<Text
					key={paragraph}
					text={paragraph}
				/>
			))}
		</div>
	);
});

