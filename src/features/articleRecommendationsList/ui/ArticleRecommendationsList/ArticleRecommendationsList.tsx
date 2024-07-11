import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { ArticleList } from 'enteties/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

	if (isLoading || error || !articles) {
		return null;
	}

	return (
		<VStack gap="8" max className={classNames('', {}, [className])}>
			<Text
				size={TextSize.L}
				title={t('Recommend')}
			/>
			<ArticleList
				articles={articles}
				target="_blank"
				virtualized={false}
			/>
		</VStack>
	);
});
