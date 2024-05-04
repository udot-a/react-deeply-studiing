import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/article';
import { getArticleDetailsData } from 'enteties/Article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((props) => {
	const { className } = props;
	const { t } = useTranslation('article');
	const navigate = useNavigate();
	const canArticleEdit = useSelector(getCanEditArticle);
	const article = useSelector(getArticleDetailsData);

	const handleBackPress = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const handleEditPress = useCallback(() => {
		navigate(`${RoutePath.article_details}${article?.id}/edit`);
	}, [article?.id, navigate]);

	return (
		<div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
			<Button theme={ButtonTheme.BORDERED} onClick={handleBackPress}>
				{t('Back to list')}
			</Button>
			{canArticleEdit && (
				<Button
					className={cls.editBtn}
					theme={ButtonTheme.BORDERED}
					onClick={handleEditPress}>
					{t('Edit')}
				</Button>
			)}
		</div>
	);
});

