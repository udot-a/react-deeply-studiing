import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
var AboutPage = function () {
    var t = useTranslation('about').t;
    return (_jsx("div", { children: _jsxs("h3", { children: [t('about'), t('something')] }) }));
};
export default AboutPage;
