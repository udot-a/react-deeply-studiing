import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
describe('Sidebar Widget', function () {
    test('Is sidebar render', function () {
        renderWithTranslation(_jsx(Sidebar, {}));
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Is toggle button change sidebar class', function () {
        renderWithTranslation(_jsx(Sidebar, {}));
        var toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
