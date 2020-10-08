import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStacksScreeens from "./AuthStackScreens";

const AppStackScreens = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Auth" component={AuthStacksScreeens} />
    </AppStack.Navigator>
  );
};

export default AppStackScreens;
