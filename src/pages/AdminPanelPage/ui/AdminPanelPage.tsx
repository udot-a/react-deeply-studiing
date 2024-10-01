import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
	const { t } = useTranslation('admin');

	return (
		<Page data-testid="admin-panel-page">
			<h3>
				{t('ADMIN PANEL PAGE')}
				{t('something')}
			</h3>
		</Page>
	);
};

export default AdminPanelPage;
