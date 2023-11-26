// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js');

const firebaseConfig = {
	apiKey: 'AIzaSyD2rXzcn4nosMS-bWGRMYUSrKjoY9KzVxQ',
	authDomain: 'run4ukraine-a81bc.firebaseapp.com',
	projectId: 'run4ukraine-a81bc',
	storageBucket: 'run4ukraine-a81bc.appspot.com',
	messagingSenderId: '714274763348',
	appId: '1:714274763348:web:255fa5f32aad4f1e6eb3c1',
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
const isSupported = firebase.messaging.isSupported();

if (isSupported) {
	// eslint-disable-next-line no-undef
	const messaging = firebase.messaging();
	messaging.onBackgroundMessage(({ notification: { title, body, image } }) => {
		console.log(
			'[firebase-messaging-sw.js] Received background message ',
			title,
		);
		self.registration.showNotification(title, { body, icon: image || '/assets/bunny.png' });
	});
} else {
	console.log('Import doesn\'t support!!!');
}
