import { Text, TextInput, Linking, StyleSheet, ImageBackground } from "react-native";
import { Container } from "../../global/ContainerView/container";
import styled from "styled-components";
import ButtonBack from "../../components/ButtonBack/styles";
import ProfilePicture from "../../components/ProfilePicture/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import "./styles";
import { Link } from "@react-navigation/native";

 

const Background2 = styled.object`
  /* position: absolute; */
  width: 100%;
  height: 65%;
  
  position:  fixed;
  bottom: 0%;

  background-color: #ffffff;
  

  border-top-left-radius  : 11ch;
  border-top-right-radius : 11ch;
  font-family: Arial, Helvetica, sans-serif;

`; 
const Div = styled.text`
  

`;
const Botao = styled.button`

width: 50%;
height: 10%;
padding: 100 ;
display: inline-block ;
position: absolute;
bottom: 100;
border-radius: 10px;
border: 0;

margin-left: 6rem;
margin-right: 6rem;
bottom: 40%;

background-color: #026A6D;
color: white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
;
`;
const Input = styled.input`
  position: flex;
  width: 317px;
  height: 35px;
  left: 29px;
  margin: 2px ;
  top: ${(props) => props.top};

  margin: 1%;

  border: 0;
  background: #9688882B;
  border-radius: 10px;

  font-family: Arial, Helvetica, sans-serif;
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
   
    alignItems: 'flex-end',
  },
  textStyle: {
    fontSize: '18px',
    marginLeft: '9rem'
  },
  hyperlinkStyle: {
    color: 'gray',
    
  },
});


export default function HistoricoPage() {
    return (
      <Container>
        <ImageBackground  
            source={require('../../assets/Images/fundocolorido.png')} 
            style={{width: '30rem', height: '50rem', position: "absolute", top: 0, bottom: 10}}  
        />
        <Background2>
         <Container>
              {/* <ImageBackground  
                  source={require('../../assets/Images/Jennifer.png')} 
                  style={{width: '100px', height: '100px'}}  
              /> */}
            <Texto>RA do aluno</Texto>
            <Input></Input>
            <Texto2>Senha</Texto2>
            <Input></Input>
            <Text style={styles.textStyle}> 
                  {' '} 
            <Text 
            style={styles.hyperlinkStyle} 
              onPress={() => {Linking.openURL('https://chat.openai.com/'); }}>Esqueci a senha</Text> 
            </Text>
            
          </Container> 
          <Botao>LOGIN</Botao>
        </Background2>
      </Container>
    );
  }
  