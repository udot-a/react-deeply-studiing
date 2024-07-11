import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'enteties/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import {
	ArticleDetailsPageHeader
} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { VStack } from 'shared/ui/Stack';

const reducers: ReducerList = {
	articleDetailsPage: articleDetailsPageReducer,
};
interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { t } = useTranslation('article');
	const { id } = useParams<{ id: string }>();

	if (!id && __PROJECT__ !=='storybook') {
		return (
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				{t('Article not found')}
			</div>
		);
	}
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterRemount>
			<Page className={classNames('', {}, [className])}>
				<VStack gap="16" max>
					<ArticleDetailsPageHeader />
					<ArticleDetails id={id || '1'}/>
					<ArticleRecommendationsList />
					<ArticleDetailsComments id={id}/>
				</VStack>

			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
