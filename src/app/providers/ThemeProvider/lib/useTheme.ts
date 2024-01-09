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
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	}, [theme, setTheme]);

	return { theme: theme || Theme.LIGHT, toggleTheme };
};