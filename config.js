import firebase from 'firebase'

require('@firebase/firestore')

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDxrPQelAGf7jKajv_2Ku1PYS_Lo37kVjw",
    authDomain: "booksanta-9d222.firebaseapp.com",
    projectId: "booksanta-9d222",
    storageBucket: "booksanta-9d222.appspot.com",
    messagingSenderId: "101349622964",
    appId: "1:101349622964:web:dbd284b01132f533eac3e1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()