import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
import { useCallback, useContext, useEffect } from 'react';
export var useTheme = function () {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    useEffect(function () {
        document.getElementsByTagName('body')[0].className = "app ".concat(theme);
    }, [theme]);
    var toggleTheme = useCallback(function () {
        var newTheme;
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
        setTheme === null || setTheme === void 0 ? void 0 : setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [theme, setTheme]);
    return { theme: theme || Theme.LIGHT, toggleTheme: toggleTheme };
};
