import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { Suspense } from 'react';

// eslint-disable-next-line react/display-name
export const TranslationDecorator = (StoryComponent: Story) => {
	return (
		<I18nextProvider i18n={i18n}>
			<Suspense fallback="Loading...">
				<StoryComponent />
			</Suspense>
		</I18nextProvider>
	);
};