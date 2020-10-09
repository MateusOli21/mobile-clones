import React, { createContext, useContext } from "react";
import FirebaseAPI from "../firebase/api";

const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={FirebaseAPI}>
      {children}
    </FirebaseContext.Provider>
  );
};

const useFirebaseContext = () => useContext(FirebaseContext);

export { FirebaseContext, FirebaseProvider, useFirebaseContext };
