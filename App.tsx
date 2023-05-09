import * as React from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container } from "./src/global/ContainerView/container";
import { Amplify as amplifyFunctions } from "aws-amplify";
import config from "./src/aws-exports";
import { useEffect, useState } from "react";
import Navigation from "./src/global/navigation/navigation";

amplifyFunctions.configure(config);

const Loading = () => (
  <Container>
    <ActivityIndicator size="large" color="#0000ff" />
  </Container>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const customer = await AsyncStorage.getItem("customer");
        setLoggedIn(customer !== null);
      } catch (error) {
        console.log("Error in fetching customer from storage:", error);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  const onLogin = async (username) => {
    try {
      await AsyncStorage.setItem("customer", username);
      setLoggedIn(true);
    } catch (error) {
      console.log("Error in setting customer in storage:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return <Navigation />;
};

export default App;
