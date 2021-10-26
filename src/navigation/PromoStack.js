import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Promociones from "../screens/Promociones/Home";
import Product from "../screens/Promociones/Promo";
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
        name="Promociones"
        component={Promociones}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="product"
        component={Product}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
