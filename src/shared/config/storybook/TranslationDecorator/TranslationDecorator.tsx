import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
// eslint-disable-next-line udot-project-plugin/path-checker
import i18nForTests from 'shared/config/i18n/i18nForTests';

// eslint-disable-next-line react/display-name
export const TranslationDecorator = (StoryComponent: Story) => {
	return (
		<I18nextProvider i18n={i18nForTests}>
			<StoryComponent />
		</I18nextProvider>
	);
};
