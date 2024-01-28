import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User';
import { useLocation, Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import React from 'react';

function RequireAuth({ children }: { children: JSX.Element}) {
	const auth = useSelector(getUserAuthData);
	const location = useLocation();

	if (!auth) {
		return <Navigate to={RoutePath.main} state={{ from: location }}/>;
	}

	if (!children) {
		return null;
	}

	return children;
}

export { RequireAuth };
