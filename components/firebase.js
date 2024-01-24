// firebase/firebase.js
import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyANYU7SyQwy1YqoQC8G99HQDBwPSZRuUCA",
  authDomain: "elyteweb.firebaseapp.com",
  projectId: "elyteweb",
  storageBucket: "elyteweb.appspot.com",
  messagingSenderId: "80160869503",
  appId: "1:80160869503:web:c752f805cdea965a1ac34a",
  measurementId: "G-P5X8MT9QZR"
};


// Initialize Firebase only in the browser environment
if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export default firebase;
