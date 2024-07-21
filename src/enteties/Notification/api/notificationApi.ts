import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notifications';

const notificationApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getNotifications: build.query<Notification[], undefined>({
			query: () => ({
				url: '/notifications',
			})
		})
	})
});

export const useNotificationsList = notificationApi.useGetNotificationsQuery;
