import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

export const AppRouter = memo(() => {
	const renderWithWrapper = useCallback((route: AppRouteProps) => {
		const { path, authOnly, element } = route;

		const routerElement = authOnly ? <RequireAuth>{element as JSX.Element}</RequireAuth> : element;
		return (

			<Route
				key={path}
				path={path}
				element={routerElement}
			/>

		);
	}, []);

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.values(routeConfig).map(renderWithWrapper)}
			</Routes>
		</Suspense>
	);
});
