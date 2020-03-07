import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAgai-M21NSbOfVFHb7DpSSh_mw39QIWWE",
    authDomain: "pokemon-44b38.firebaseapp.com",
    databaseURL: "https://pokemon-44b38.firebaseio.com",
    projectId: "pokemon-44b38",
    storageBucket: "pokemon-44b38.appspot.com",
    messagingSenderId: "76925825413",
    appId: "1:76925825413:web:97442e0e13dda7a7ac94ec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export default firebase;