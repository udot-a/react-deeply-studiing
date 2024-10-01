import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line udot-project-plugin/layer-imports
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Counter } from '@/enteties/Counter';
import { Page } from '@/widgets/Page';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';

const MainPage = () => {
	const { t } = useTranslation();

	return (
		<Page data-testid="main-page">
			<h1>
				<BugButton />
				{t('mainPage')}
				<Counter />

				<ListBox
					defaultValue="Choose value"
					onChange={() => {}}
					value={undefined}
					items={[
						{ value: '1', content: '1 item sfdsfsdfsdfdsf' },
						{ value: '2', content: '2 item' },
						{ value: '3', content: '3 item' },
						{ value: '4', content: '4 item', disabled: true },
					]}
				/>
			</h1>
		</Page>
	);
};

export default MainPage;
