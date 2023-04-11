import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OcorrenciasPage from "../screens/Ocorrencias/ocorrencias";
import HomePage from "../screens/HomeScreen/home";
import PerfilPage from "../screens/Perfil/perfil";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ocorrencias" component={OcorrenciasPage} />
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Perfil" component={PerfilPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
