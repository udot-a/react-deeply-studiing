import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h1>
				<BugButton />
				{t('mainPage')}
			</h1>
		</div>
	);
};

export default MainPage;
