import React, { useContext, useState, createContext } from "react";

const UserContext = createContext([{}, () => {}]);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    uid: "",
    isLoggedIn: null,
    profilePhotoUrl: "default",
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserContext, UserProvider, useUserContext };
