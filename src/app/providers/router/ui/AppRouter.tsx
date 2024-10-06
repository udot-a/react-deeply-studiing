import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRouteProps } from '@/shared/types/router';
import { UserRole } from '@/shared/const/userRole';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const { path, authOnly, element } = route;

    const routerElement = authOnly ? (
      <RequireAuth roles={[UserRole.MANAGER, UserRole.ADMIN]}>
        {element as JSX.Element}
      </RequireAuth>
    ) : (
      element
    );
    return <Route key={path} path={path} element={routerElement} />;
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
});
