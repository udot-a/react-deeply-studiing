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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
export var Navbar = function (_a) {
    var className = _a.className;
    var t = useTranslation('translation').t;
    return (_jsx("div", __assign({ className: classNames(cls.navbar, {}, [className]) }, { children: _jsxs("div", __assign({ className: cls.links }, { children: [_jsx(AppLink, __assign({ to: '/', theme: AppLinkTheme.SECONDARY }, { children: t('goToMain') })), _jsx(AppLink, __assign({ to: '/about', theme: AppLinkTheme.SECONDARY }, { children: t('goToAbout') }))] })) })));
};
