import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDM0KC1LPuQJy7efduQ_EPR8-ZjJd2jfgk",
  authDomain: "crwn-db-71d90.firebaseapp.com",
  projectId: "crwn-db-71d90",
  storageBucket: "crwn-db-71d90.appspot.com",
  messagingSenderId: "920039171124",
  appId: "1:920039171124:web:48f77a7ff6fa42715b9661"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const singInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase