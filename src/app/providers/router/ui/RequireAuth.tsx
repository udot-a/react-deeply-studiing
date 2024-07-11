import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from 'enteties/User';
import { useLocation, Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import React, { FC, useMemo } from 'react';

interface RequireAuthProps {
	children: JSX.Element;
	roles?: UserRole[];
}

export const RequireAuth: FC<RequireAuthProps> = ({ children, roles }) => {
	const auth = useSelector(getUserAuthData);
	const userRoles = useSelector(getUserRoles);
	const location = useLocation();

	const hasRequiredRoles = useMemo(() => {
		if (!roles) {
			return true;
		}

		return roles.some(requiredRole => {
			const hasRole = userRoles?.includes(requiredRole);

			return hasRole;
		});
	}, [roles, userRoles]);

	if (!auth) {
		return <Navigate to={RoutePath.main} state={{ from: location }} replace/>;
	}

	if (!hasRequiredRoles) {
		return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace/>;
	}

	if (!children) {
		return null;
	}

	return children;
};
