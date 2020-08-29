import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Following from "./pages/Following";

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="Following" component={Following} />
      <Screen name="Discover" component={View} />
      <Screen name="Browse" component={View} />
      <Screen name="Esports" component={View} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
