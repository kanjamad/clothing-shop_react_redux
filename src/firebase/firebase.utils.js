import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCAwWR215gmDVE6f9w71gfvqAcBkRpFkCw',
	authDomain: 'crwn-db-9deb6.firebaseapp.com',
	databaseURL: 'https://crwn-db-9deb6.firebaseio.com',
	projectId: 'crwn-db-9deb6',
	storageBucket: 'crwn-db-9deb6.appspot.com',
	messagingSenderId: '958554465952',
	appId: '1:958554465952:web:ee526260445920b2248bc5',
	measurementId: 'G-FVR8B6Y03N'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
