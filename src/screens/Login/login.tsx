import { Text, TextInput } from "react-native";
import { Container } from "../../global/ContainerView/container";
import styled from "styled-components";
import ButtonBack from "../../components/ButtonBack/styles";
import ProfilePicture from "../../components/ProfilePicture/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
    ImageBackground,
    Button
  } from 'react-native';

 

const Background2 = styled.object`
  /* position: absolute; */
  width: 100%;
  height: 65%;
  
  position:  fixed;
  bottom: 0%;

  background-color: #ffffff;
  

  border-top-left-radius  : 11ch;
  border-top-right-radius : 11ch;
  

`; 
const Div = styled.text`
  
 

`;

const Input = styled.input`
  position: absolute;
  width: 317px;
  height: 35px;
  left: 29px;
  top: ${(props) => props.top};
  border: 0;
  background: rgba(217, 217, 217, 0.82);
  border-radius: 10px;
`;
// background-image: url("../../assets/Images/Doodle background 1.png");

// export a simple home screen component and use styles from styles.ts file as "styled-components"
export default function HistoricoPage() {
    return (
      <Container>
        <ImageBackground  
            source={require('../../assets/Images/fundocolorido.png')} 
            style={{width: 380, height: 500, position: "absolute", top: 0, bottom: 10}}  
        />
        <Background2>
        <Container>
            <Text>RA do Aluno
                <Input></Input>
            </Text>
        </Container>
        <Container>
            Senha
            <Input></Input>
            <Button></Button>
        </Container>
        </Background2>
        
       
        
        
        
        
        
      </Container>
      
    );
  }
  