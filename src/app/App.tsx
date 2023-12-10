import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import useFcmToken from 'app/providers/Firebase/useFcmToken';
import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from 'app/providers/Firebase/firebase';

export const App = () => {
	const { theme } = useTheme();
	const { fcmToken } = useFcmToken();

	console.log('FCM token:', fcmToken);

	useEffect(() => {
		if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
			const messaging = getMessaging(firebaseApp);
			const unsubscribe = onMessage(messaging, (payload) => {
				console.log('Foreground push notification received:', payload);
				// Handle the received push notification while the app is in the foreground
				// You can display a notification or update the UI based on the payload
			});
			return () => {
				unsubscribe(); // Unsubscribe from the onMessage event
			};
		}
	}, []);
	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
