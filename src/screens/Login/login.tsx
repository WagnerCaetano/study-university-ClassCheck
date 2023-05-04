import { Text, Linking, StyleSheet, View } from "react-native";
import { Container } from "../../global/ContainerView/container";
import React, { useState } from "react";
import { user_login } from "../../api/user_api";
import { LoginButton, LabelText, Input, ColorfulBackground, LoginContainer, LoginButtonText } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "styled-components";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
  },
  hyperlinkStyle: {
    color: "gray",
  },
});

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Senha não deve conter espaços em branco";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkPassword = checkPasswordValidity(password);

    if (!checkPassword) {
      user_login({
        username: username,
        password: password,
      })
        .then((result) => {
          if (result.status == 200) {
            AsyncStorage.setItem("AccessToken", result.data.token);
            onLogin.replace("Home");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.log(checkPassword);
    }

    await AsyncStorage.setItem("customer", username);
    onLogin(username);
  };

  return (
    <ColorfulBackground>
      <LoginContainer>
        <LabelText>RA do aluno</LabelText>
        <Input placeholder="Nome" value={username} onChange={(e) => setUsername(e.target.value)} />
        <LabelText>Senha</LabelText>
        <Input placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} secureTextEntry={true} />
        <Text style={styles.textStyle}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("https://chat.openai.com/");
            }}
          >
            Esqueci a senha
          </Text>
        </Text>
        <LoginButton onClick={handleSubmit}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>
      </LoginContainer>
    </ColorfulBackground>
  );
};

export default LoginPage;
