import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
var MainPage = function () {
    var t = useTranslation().t;
    return (_jsx("div", { children: _jsxs("h1", { children: [_jsx(BugButton, {}), t('mainPage')] }) }));
};
export default MainPage;
