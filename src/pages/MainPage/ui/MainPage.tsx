import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h1>
				{t('mainPage')}
			</h1>
		</div>
	);
};

export default MainPage;
