import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
import { useCallback, useContext, useEffect } from 'react';

export interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = ():UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		document.getElementsByTagName('body')[0].className = `app ${theme}`;
	}, [theme]);

	const toggleTheme = useCallback(() => {
		let newTheme: Theme;

		switch (theme) {
		case Theme.DARK:
			newTheme = Theme.LIGHT;
			break;
		case Theme.LIGHT:
			newTheme = Theme.ORANGE;
			break;
		case Theme.ORANGE:
			newTheme = Theme.DARK;
			break;
		default:
			newTheme = Theme.LIGHT;
		}
		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	}, [theme, setTheme]);

	return { theme: theme || Theme.LIGHT, toggleTheme };
};