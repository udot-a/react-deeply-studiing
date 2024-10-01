import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles } from '@/enteties/User';
import { useLocation, Navigate } from 'react-router-dom';
import React, { FC, useMemo } from 'react';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';
import { UserRole } from '@/shared/const/userRole';

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
		return <Navigate to={getRouteMain()} state={{ from: location }} replace/>;
	}

	if (!hasRequiredRoles) {
		return <Navigate to={getRouteForbidden()} state={{ from: location }} replace/>;
	}

	if (!children) {
		return null;
	}

	return children;
};
