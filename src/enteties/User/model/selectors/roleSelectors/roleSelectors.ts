import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

import { UserRole } from '../../consts/consts';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(
	getUserRoles,
	(roles) => {
		return Boolean(roles?.includes(UserRole.ADMIN));
	});
export const isUserManager = createSelector(
	getUserRoles,
	(roles) => {
		return Boolean(roles?.includes(UserRole.MANAGER));
	});
export const isUser = createSelector(
	getUserRoles,
	(roles) => {
		return Boolean(roles?.includes(UserRole.USER));
	});
