import * as React from "react";
import { LoginButton, LabelText, Input, ColorfulBackground, LoginContainer, LoginButtonText } from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { SigninContext } from "../../context/context";
import { showToast } from "../../components/Toast/provider";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { setUserData }: any = React.useContext(SigninContext);

  const handleNavigate = (user) => {
    navigation.navigate('Status')

    /*setUserData(user);
    if (user.challengeName == "NEW_PASSWORD_REQUIRED") {
      navigation.navigate("PasswordChange");
      return;
    }
    showToast("Login realizado com sucesso !");
    navigation.navigate("Home");*/
  };

  React.useEffect(() => {
    setLoading(true);
    Auth.currentAuthenticatedUser()
      .then((user) => {
        handleNavigate(user);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response: any = await Auth.signIn(data.username, data.password);
      handleNavigate(response);
    } catch (error: any) {
      showToast("Ops erro no login: " + error.message);
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
