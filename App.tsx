import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container } from "./src/global/ContainerView/container";
import Tabs from "./src/navigation/tabs";
import LoginPage from "./src/screens/Login/login";

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
      const customer = await AsyncStorage.getItem("customer");
      setLoggedIn(customer !== null);
      setLoading(false);
    };
    checkLogin();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return /*loggedIn ?*/ <Tabs /> /*: <LoginPage onLogin={undefined} navigation={undefined} />*/;
};

export default App;
