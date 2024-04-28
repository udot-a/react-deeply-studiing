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
import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'enteties/User';
export var Navbar = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var authData = useSelector(getUserAuthData);
    var dispatch = useDispatch();
    var onCloseModal = useCallback(function () {
        setIsOpen(false);
    }, []);
    var onShowModal = useCallback(function () {
        setIsOpen(true);
    }, []);
    var handleLogout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    if (authData) {
        return (_jsx("div", __assign({ className: classNames(cls.navbar, {}, [className]) }, { children: _jsx(Button, __assign({ "data-testid": "login-button-test", theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: handleLogout }, { children: t('Logout') })) })));
    }
    return (_jsxs("div", __assign({ className: classNames(cls.navbar, {}, [className]) }, { children: [_jsx(Button, __assign({ "data-testid": "login-button-test", theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: onShowModal }, { children: t('login') })), isOpen && _jsx(LoginModal, { isOpen: isOpen, onClose: onCloseModal })] })));
});
