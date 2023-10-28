import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
import { useCallback, useContext } from 'react';

export interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = ():UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = useCallback(() => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	}, [theme, setTheme]);

	return { theme, toggleTheme};
};