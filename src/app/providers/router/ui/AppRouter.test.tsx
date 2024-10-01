import { AppRouter } from './AppRouter';
import { renderComponent } from '@/shared/lib/tests/componentRender/componentRender';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { screen } from '@testing-library/react';
import { UserRole } from '@/shared/const/userRole';

describe('app/router/AppRouter', () => {
	test('page should render', async () => {
		renderComponent(<AppRouter />, {
			route: getRouteAbout(),
		});

		const page = await screen.findByTestId('AboutPage');
		expect(page).toBeInTheDocument();
	});

	test('page not found', async () => {
		renderComponent(<AppRouter />, {
			route: '/asdasdasda,'
		});

		const page = await screen.findByTestId('not-found-page');
		expect(page).toBeInTheDocument();
	});

	test('Redirect non-authorized user', async () => {
		renderComponent(<AppRouter />, {
			route: getRouteProfile('1'),
		});

		const page = await screen.findByTestId('main-page');
		expect(page).toBeInTheDocument();
	});

	test('Access to the closed page for authorized user', async () => {
		renderComponent(<AppRouter />, {
			route: getRouteProfile('1'),
			initialState: {
				user: {
					_inited: true,
					authData: { id: '1', username: 'Andrii', roles: [UserRole.ADMIN] },
				}
			}
		});

		const page = await screen.findByTestId('profile-page');
		expect(page).toBeInTheDocument();
	});

	test('Access is forbidden (missing the role)', async () => {
		renderComponent(<AppRouter />, {
			route: getRouteAdmin(),
			initialState: {
				user: {
					_inited: true,
					authData: { id: '1', username: 'Andrii' },
				}
			}
		});

		const page = await screen.findByTestId('ForbiddenPage');
		expect(page).toBeInTheDocument();
	});
});
