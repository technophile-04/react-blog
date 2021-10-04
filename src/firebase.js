import firebase, { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyADAKc7CKzgZRtfdaSzdqBqMAZQPVVMI9g',
	authDomain: 'react-blog-903a8.firebaseapp.com',
	projectId: 'react-blog-903a8',
	storageBucket: 'react-blog-903a8.appspot.com',
	messagingSenderId: '997881098269',
	appId: '1:997881098269:web:76c8160d8c94452cda56f4',
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore();
