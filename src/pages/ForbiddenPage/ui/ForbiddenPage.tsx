import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const ForbiddenPage = () => {
	const { t } = useTranslation();

	return (
		<Page>
			<h3>
				{t('Forbidden page')}
				{t('You do not have access to this page')}
			</h3>
		</Page>
	);
};

export default ForbiddenPage;
