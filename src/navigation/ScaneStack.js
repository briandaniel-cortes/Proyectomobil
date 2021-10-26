import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Scaner/Scaner";
import Monumento from "../screens/Scaner/ScanerMonumento";
import colors from "../styles/colors";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.fontLight,
        headerStyle: { backgroundColor: colors.bgDark },
        cardStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen
        name="Scaner"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Monumento"
        component={Monumento}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
