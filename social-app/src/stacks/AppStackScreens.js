import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { useUserContext } from "../context/UserContext";

import AuthStacksScreeens from "./AuthStackScreens";
import MainStackScreens from "./MainStackScreens";
import LoadingScreen from "../screens/LoadingScreen";

const AppStackScreens = () => {
  const AppStack = createStackNavigator();

  const [user] = useUserContext();

  return (
    <AppStack.Navigator headerMode="none">
      {user.isLoggedIn === null ? (
        <AppStack.Screen name="Loading" component={LoadingScreen} />
      ) : user.isLoggedIn ? (
        <AppStack.Screen name="Main" component={MainStackScreens} />
      ) : (
        <AppStack.Screen name="Auth" component={AuthStacksScreeens} />
      )}
    </AppStack.Navigator>
  );
};

export default AppStackScreens;
