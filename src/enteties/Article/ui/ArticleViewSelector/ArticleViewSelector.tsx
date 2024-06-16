import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/article';
import ListIcon from 'shared/assets/icons/bi_list.svg';
import TiledIcon from 'shared/assets/icons/fe_tiled.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
	{
		view: ArticleView.SMALL,
		icon: TiledIcon,
	},
	{
		view: ArticleView.BIG,
		icon: ListIcon,
	},
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo((props) => {
	const { className, view, onViewClick } = props;

	const handleClick = (newView: ArticleView) => () => {
		onViewClick?.(newView);
	};

	return (
		<div className={classNames(cls.ArticleViewSelector, {}, [className])}>
			{viewTypes.map(viewType => (
				<Button
					key={viewType.view}
					theme={ButtonTheme.CLEAR}
					onClick={handleClick(viewType.view)}
				>
					<Icon
						Svg={viewType.icon}
						className={classNames('', { [cls.notSelected]: view !== viewType.view })}
					/>
				</Button>
			))}
		</div>
	);
});

