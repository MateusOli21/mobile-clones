import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDiepCG9bZpTjEcTXjiB-FLfnVuf3HuzK8",
  authDomain: "social-app-9c3af.firebaseapp.com",
  databaseURL: "https://social-app-9c3af.firebaseio.com",
  projectId: "social-app-9c3af",
  storageBucket: "social-app-9c3af.appspot.com",
  messagingSenderId: "47205471704",
  appId: "1:47205471704:web:de5d7f304e8e12d2ba4ead",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();
const firebaseAuth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { firebase, firestore, firebaseAuth, provider };
