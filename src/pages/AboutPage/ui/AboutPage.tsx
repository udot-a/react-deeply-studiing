import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
	const { t } = useTranslation('about');

	return (
		<div>
			<h3>
				{t('about')}
				{t('something')}
			</h3>
		</div>
	);
};

export default AboutPage;