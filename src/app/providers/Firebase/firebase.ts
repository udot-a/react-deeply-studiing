import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyD2rXzcn4nosMS-bWGRMYUSrKjoY9KzVxQ',
	authDomain: 'run4ukraine-a81bc.firebaseapp.com',
	projectId: 'run4ukraine-a81bc',
	storageBucket: 'run4ukraine-a81bc.appspot.com',
	messagingSenderId: '714274763348',
	appId: '1:714274763348:web:255fa5f32aad4f1e6eb3c1',
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
