import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5ELVHsChw5sIwWaEOnKpHBwHer8Q3Uj8",
    authDomain: "clone-d7c71.firebaseapp.com",
    databaseURL: "https://clone-d7c71.firebaseio.com",
    projectId: "clone-d7c71",
    storageBucket: "clone-d7c71.appspot.com",
    messagingSenderId: "569310101562",
    appId: "1:569310101562:web:b0208512f5fe24ac977503",
    measurementId: "G-P5VQHBRHGP"
  };

  const firebaseApp = firebase.app.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth}; 