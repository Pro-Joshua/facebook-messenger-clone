import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA3MPQgZe9AipU06fB115dFhB0wKtZaQT0",
  authDomain: "facebook-messenger-clone-dba83.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-dba83.firebaseio.com",
  projectId: "facebook-messenger-clone-dba83",
  storageBucket: "facebook-messenger-clone-dba83.appspot.com",
  messagingSenderId: "861946801008",
  appId: "1:861946801008:web:2993c1cf2de48b26dcbdb5",
  measurementId: "G-T298H5SMW1",
});

const db = firebaseApp.firestore();

export default db;
