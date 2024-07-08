import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'enteties/Counter';
import { Page } from 'widgets/Page/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
	const { t } = useTranslation();

	return (
		<Page>
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
