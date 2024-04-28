import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'enteties/Counter';
import { Page } from 'widgets/Page/Page';
var MainPage = function () {
    var t = useTranslation().t;
    return (_jsx(Page, { children: _jsxs("h1", { children: [_jsx(BugButton, {}), t('mainPage'), _jsx(Counter, {})] }) }));
};
export default MainPage;
