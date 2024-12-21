import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA8pjwcmeB7gTNBzRGs5sfdzA5awpUbLq4",  // Your API key
    authDomain: "language-access-e117e.firebaseapp.com",  // Your Auth domain
    projectId: "language-access-e117e",  // Your Project ID
    storageBucket: "language-access-e117e.appspot.com",  // Your Storage Bucket
    messagingSenderId: "846021480062",  // Your Messaging Sender ID
    appId: "1:846021480062:android:15d010c789b41ee57cd22f",  // Your App ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
