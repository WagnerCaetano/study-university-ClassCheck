import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HistoricoPage from "../../screens/Historico/historico";
import PerfilPage from "../../screens/Perfil/perfil";
import HomePage from "../../screens/Home/home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import LoginPage from "../../screens/Login/login";
import PasswordChangeScreen from "../../screens/Login/PasswordChange/passwordChange";
import { Status } from "../../screens/Status/status";

const Tab = createBottomTabNavigator();

function Home() {
  return (
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
  );
}

const Stack = createStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState(undefined);

  const checkuser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser({ bypassCache: true });
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkuser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Home" : "Login"}>
        <Stack.Screen name="Status" component={Status} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordChange" component={PasswordChangeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
