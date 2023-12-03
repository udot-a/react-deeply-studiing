import React, { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';

// Component for testing purposes
export const BugButton: FC = () => {
	const [error, setError] = useState(false);
	const { t } = useTranslation();
  
	const onThrow = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return (
		<Button
			theme={ButtonTheme.BORDERED}
			onClick={onThrow}
		>
			{t('throw error')}
		</Button>
	);
};

