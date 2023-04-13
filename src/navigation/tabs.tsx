import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HistoricoPage from "../screens/Historico/historico";
import PerfilPage from "../screens/Perfil/perfil";
import HomePage from "../screens/Home/home";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Historico") {
              iconName = focused ? "time" : "time-outline";
            } else if (route.name === "Perfil") {
              iconName = focused ? "person" : "person-outline";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          initialRouteName: "Home",
          headerShown: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#ffffff78",
          tabBarStyle: {
            backgroundColor: "#026A6D",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        })}
      >
        <Tab.Screen name="Historico" component={HistoricoPage} />
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Perfil" component={PerfilPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
