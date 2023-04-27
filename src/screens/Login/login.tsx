import { Text, TextInput, Linking, StyleSheet, ImageBackground } from "react-native";
import { Container } from "../../global/ContainerView/container";
import styled from "styled-components";
import "./styles";
import { useEffect } from "react";


const Login = ({ onLogin }) => {
  const userRef = useRed();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [username, password])


  const handleLogin = async () => {
    // Perform login logic here
    // ...

    // Store customer data in AsyncStorage
    await AsyncStorage.setItem('customer', username);

    // Call the onLogin callback function with the customer data
    onLogin(username);
  };


const Background2 = styled.object`
  /* position: absolute; */
  width: 100%;
  height: 65%;

  position: fixed;
  bottom: 0%;

  background-color: #ffffff;

  border-top-left-radius: 11ch;
  border-top-right-radius: 11ch;
  font-family: Arial, Helvetica, sans-serif;
`;
const Botao = styled.button`
  width: 50%;
  height: 10%;
  padding: 100;
  display: inline-block;
  position: absolute;
  bottom: 100;
  border-radius: 10px;
  border: 0;

  margin-left: 6rem;
  margin-right: 6rem;
  bottom: 30%;

  background-color: #026a6d;
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
`;
const Input = styled.input`
  position: flex;
  width: 317px;
  height: 35px;
  left: 32rem;
  top: ${(props) => props.top};
  margin: 3%;

  border: 0;
  background: #9688882b;
  border-radius: 10px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
`;
const Texto = styled.text`
  margin-top: 15px;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 13rem;
`;
const Texto2 = styled.text`
  margin-top: 15px;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 16rem;
`;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "flex-end",
  },
  textStyle: {
    fontSize: "18px",
    marginLeft: "9rem",
  },
  hyperlinkStyle: {
    color: "gray",
  },
});

const handleSubmit = async (e) => {
  e.preventDefault();
}


 function LoginPage() {
  return (
    <Container>
      <ImageBackground source={require("../../assets/Images/fundocolorido.png")} style={{ width: "30rem", height: "50rem", position: "absolute", top: 0, bottom: 10 }} />
      <Background2>
        <Container>
          {/* <ImageBackground  
                  source={require('../../assets/Images/Jennifer.png')} 
                  style={{width: '100px', height: '100px'}}  
              /> */}
          <form onSubmit={handleSubmit}/>
          <Texto>RA do aluno</Texto>
          <Input
          type="text"
            id="username"
            placeholder="Username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            value={username}
            required
          />
          <Texto2>Senha</Texto2>
          <Input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Text style={styles.textStyle}>
            {" "}
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL("https://chat.openai.com/");
              }}
            >
              Esqueci a senha
            </Text>
          </Text>
        </Container>
        <Botao>Sign In</Botao>
      </Background2>
    </Container>
  );
}}
export default Login;