var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
export var ThemeSwitcher = memo(function () {
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (_jsx(Button, __assign({ onClick: toggleTheme, theme: ButtonTheme.CLEAR }, { children: theme === Theme.DARK ? _jsx(DarkIcon, {}) : _jsx(LightIcon, {}) })));
});
