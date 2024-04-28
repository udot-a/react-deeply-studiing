import { createContext } from 'react';
export var Theme;
(function (Theme) {
    Theme["LIGHT"] = "light";
    Theme["DARK"] = "dark";
    Theme["ORANGE"] = "orange";
})(Theme || (Theme = {}));
export var ThemeContext = createContext({});
export var LOCAL_STORAGE_THEME_KEY = 'theme';
