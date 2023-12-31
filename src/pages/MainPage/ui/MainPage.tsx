import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'enteties/Counter';

const MainPage = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h1>
				<BugButton />
				{t('mainPage')}
				<Counter />
			</h1>
		</div>
	);
};

export default MainPage;
