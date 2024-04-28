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
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
export var PageError = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var reloadPage = function () {
        location.reload();
    };
    return (_jsxs("div", __assign({ className: classNames(cls.pageError, {}, [className]) }, { children: [_jsx("p", { children: t('Oops, somethings wrong happens!!!') }), _jsx(Button, __assign({ theme: ButtonTheme.BORDERED, onClick: reloadPage, className: cls.button }, { children: t('Update the page') }))] })));
};
