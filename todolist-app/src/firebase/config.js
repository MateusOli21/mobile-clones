import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIBZNag24wvv2xjyRxE4bmS7mXVn47QBA",
  authDomain: "todo-app-87543.firebaseapp.com",
  databaseURL: "https://todo-app-87543.firebaseio.com",
  projectId: "todo-app-87543",
  storageBucket: "todo-app-87543.appspot.com",
  messagingSenderId: "796963659744",
  appId: "1:796963659744:web:162eeb22ddf3849d0c9585",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();
const firebaseAuth = firebaseApp.auth().signInAnonymously();

export { firebase, firestore, firebaseAuth };
