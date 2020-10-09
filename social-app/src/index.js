import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStackScreens from "./stacks/AppStackScreens";
import { UserProvider } from "./context/UserContext";
import { FirebaseProvider } from "./context/FirebaseContext";

export default Main = () => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <NavigationContainer>
          <AppStackScreens />
        </NavigationContainer>
      </UserProvider>
    </FirebaseProvider>
  );
};
