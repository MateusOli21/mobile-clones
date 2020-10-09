import React, { createContext } from "react";
import { firebase, firebaseConfig } from "../firebase/config";

const FirebaseContext = createContext();

let firebaseApp;

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}

// let firestore = firebaseApp.firestore();

const Firebase = {};

const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
