import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYHYw4zWcG9-ygUa_J-rPvZPhzMUkbnK4",
  authDomain: "pokemon-52216.firebaseapp.com",
  databaseURL: "https://pokemon-52216.firebaseio.com",
  projectId: "pokemon-52216",
  storageBucket: "pokemon-52216.appspot.com",
  messagingSenderId: "406816550489",
  appId: "1:406816550489:web:831314d02e035947518b48"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export default firebase;