import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDmITqb8XsJ97o_E4fzLMYYKOP352bguis',
	authDomain: 'crown-bosel.firebaseapp.com',
	databaseURL: 'https://crown-bosel.firebaseio.com',
	projectId: 'crown-bosel',
	storageBucket: 'crown-bosel.appspot.com',
	messagingSenderId: '187031428244',
	appId: '1:187031428244:web:8bb0be6feea81bb965e881',
	measurementId: 'G-6L6KGEJ5EB'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
