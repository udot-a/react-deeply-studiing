import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'enteties/Article';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { t } = useTranslation('article');
	const { id } = useParams<{ id: string }>();

	if (!id && __PROJECT__ !=='storybook') {
		return (
			<div className={classNames('', {}, [className])}>
				{t('Article not found')}
			</div>
		);
	}
	return (
		<div className={classNames('', {}, [className])}>
			<ArticleDetails id={id || '1'}/>
		</div>
	);
};

export default memo(ArticleDetailsPage);
