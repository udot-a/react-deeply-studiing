import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'enteties/Counter';
import { Page } from 'widgets/Page/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';
var MainPage = function () {
    var t = useTranslation().t;
    return (_jsx(Page, { children: _jsxs("h1", { children: [_jsx(BugButton, {}), t('mainPage'), _jsx(Counter, {}), _jsx(ListBox, { defaultValue: "Choose value", onChange: function (value) { }, value: undefined, items: [
                        { value: '1', content: '1 item sfdsfsdfsdfdsf' },
                        { value: '2', content: '2 item' },
                        { value: '3', content: '3 item' },
                        { value: '4', content: '4 item', disabled: true },
                    ] })] }) }));
};
export default MainPage;
