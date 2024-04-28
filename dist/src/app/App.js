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
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import useFcmToken from 'app/providers/Firebase/useFcmToken';
import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from 'app/providers/Firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'enteties/User';
export var App = function () {
    var theme = useTheme().theme;
    var fcmToken = useFcmToken().fcmToken;
    var dispatch = useDispatch();
    var inited = useSelector(getUserInited);
    console.log('FCM token:', fcmToken);
    useEffect(function () {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    useEffect(function () {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            var messaging = getMessaging(firebaseApp);
            var unsubscribe_1 = onMessage(messaging, function (payload) {
                console.log('Foreground push notification received:', payload);
                // Handle the received push notification while the app is in the foreground
                // You can display a notification or update the UI based on the payload
            });
            return function () {
                unsubscribe_1(); // Unsubscribe from the onMessage event
            };
        }
    }, []);
    return (_jsx("div", __assign({ "data-testid": "app-test", className: classNames('app', {}, [theme]) }, { children: _jsxs(Suspense, __assign({ fallback: "" }, { children: [_jsx(Navbar, {}), _jsxs("div", __assign({ className: "content-page" }, { children: [_jsx(Sidebar, {}), inited && _jsx(AppRouter, {})] }))] })) })));
};
