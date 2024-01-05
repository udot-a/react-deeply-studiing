import React, { FC, memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(() => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			onClick={toggleTheme}
			theme={ButtonTheme.CLEAR}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
});
