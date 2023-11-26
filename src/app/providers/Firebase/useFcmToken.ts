import { useEffect, useState } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import firebaseApp from './firebase';

const useFcmToken = () => {
	const [ token, setToken ] = useState('');
	const [ notificationPermissionStatus, setNotificationPermissionStatus ] =
    useState('');
	console.log('=>(useFcmToken.ts:9) notificationPermissionStatus', notificationPermissionStatus);

	useEffect(() => {
		const retrieveToken = async () => {
			try {
				if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
					const messaging = getMessaging(firebaseApp);

					// Retrieve the notification permission status
					const permission = await Notification.requestPermission();
					setNotificationPermissionStatus(permission);

					// Check if permission is granted before retrieving the token
					if (permission === 'granted') {
						const currentToken = await getToken(messaging, {
							vapidKey:
                'BKPn7LsWZZaw549kiT4NwIxMjVLH8PFO8Pf_s6JgVoOVyLpOVJJquiAWVnG4EkL2nyqaTF3EoUl3c4GbtIq1b40',
						});
						if (currentToken) {
							setToken(currentToken);
						} else {
							console.log(
								'No registration token available. Request permission to generate one.'
							);
						}
					}
				}
			} catch (error) {
				console.log('An error occurred while retrieving token:', error);
			}
		};

		retrieveToken();
	}, []);

	return { fcmToken: token, notificationPermissionStatus };
};

export default useFcmToken;
