import * as React from "react";
import { LoginButton, LabelText, Input, ColorfulBackground, LoginContainer, LoginButtonText } from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Senha não deve conter espaços em branco";
    }
  };

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
      navigation.navigate("Home");
    } catch (error: any) {
      Alert.alert("Ops erro no login", error.message);
    } finally {
      setLoading(false);
    }
  };

  const onForgotPasswordPressed = () => {
    //navigation.navigate("ForgotPassword");
  };

  return (
    <ColorfulBackground>
      <LoginContainer>
        <LabelText>RA do aluno</LabelText>
        <Input placeholder="RA do Aluno" value={username} onChangeText={setUsername} />
        <LabelText>Senha</LabelText>
        <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
        <LabelText onPress={onForgotPasswordPressed}>Esqueci a senha</LabelText>
        <LoginButton>
          <LoginButtonText onClick={() => onSignInPressed({ username, password })}>
            {" "}
            {loading ? "Carregando" : "Entrar"}
          </LoginButtonText>
        </LoginButton>
      </LoginContainer>
    </ColorfulBackground>
  );
};

export default LoginPage;
