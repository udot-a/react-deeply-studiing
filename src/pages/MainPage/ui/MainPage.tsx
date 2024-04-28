import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'enteties/Counter';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
	const { t } = useTranslation();

	return (
		<Page>
			<h1>
				<BugButton />
				{t('mainPage')}
				<Counter />
			</h1>
		</Page>
	);
};

export default MainPage;
