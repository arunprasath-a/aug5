import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const config = {
  apiKey: "AIzaSyCQ195Z7cD7YB937m9bueaKecHwHl4a-64",
  authDomain: "crown-db-63b96.firebaseapp.com",
  databaseURL: "https://crown-db-63b96.firebaseio.com",
  projectId: "crown-db-63b96",
  storageBucket: "",
  messagingSenderId: "1070913622515",
  appId: "1:1070913622515:web:7618d3558b7fc52f"
};

//for saving data into firebase
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
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

//for sign in with gmail authenticator
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
