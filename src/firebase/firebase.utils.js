import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDiMZpms8sH27pPA8MkCCDGsU383QhZCOQ",
  authDomain: "react-ecom-e00ca.firebaseapp.com",
  databaseURL: "https://react-ecom-e00ca.firebaseio.com",
  projectId: "react-ecom-e00ca",
  storageBucket: "react-ecom-e00ca.appspot.com",
  messagingSenderId: "928490177133",
  appId: "1:928490177133:web:64b0b462699bd2dc79f564"
};

firebase.initializeApp(config);

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
