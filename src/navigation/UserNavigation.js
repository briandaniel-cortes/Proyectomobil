import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import colors from "../styles/colors";
import ProductStack from "./ProductStack";

import PromoStack from "./PromoStack";
import MapaStack from "./MapaStack";
import ScaneStack from "./ScaneStack";
import AccountStack from "./AccountStack";

const Tab = createMaterialBottomTabNavigator();

export default function UserNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={styles.navigation}
        screenOptions={({ route }) => ({
          tabBarIcon: (routeStatus) => {
            return setIcon(route, routeStatus);
          },
        })}
      >
        <Tab.Screen
          name="home"
          component={ProductStack}
          options={{
            title: "Locales",
          }}
        />

        <Tab.Screen
          name="Promociones"
          component={PromoStack}
          options={{
            title: "Promociones",
          }}
        />
        <Tab.Screen
          name="Mapa"
          component={MapaStack}
          options={{
            title: "Mapa",
          }}
        />

        <Tab.Screen
          name="Scaner"
          component={ScaneStack}
          options={{
            title: "Scaner",
          }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{
            title: "Mi cuenta",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function setIcon(route, routeStatus) {
  let iconName = "";
  switch (route.name) {
    case "home":
      iconName = "home";
      break;
    case "Mapa":
      iconName = "map";
      break;

    case "Scaner":
      iconName = "search";
      break;
    case "Promociones":
      iconName = "money";
      break;
    case "account":
      iconName = "bars";
      break;
    default:
      break;
  }
  return <AwesomeIcon name={iconName} style={[styles.icon]} />;
}

const styles = StyleSheet.create({
  navigation: {
    backgroundColor: colors.bgDark,
  },
  icon: {
    fontSize: 20,
    color: colors.fontLight,
  },
});
