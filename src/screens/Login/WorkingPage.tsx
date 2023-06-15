import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ContainerText, Mensagem, ContainerEmail, TextEmail, Mensagem2} from './styleWorking';
import WorkingHere from '../../assets/Images/WorkingHere.png'
import { Linking } from "react-native";
import { Zocial } from "@expo/vector-icons";

const handleEmailPress = () => {
  const email = "suporteclasscheck@outlook.com.br";
  Linking.openURL(`mailto:${email}`);
};

const App = () => {
  return (
    <View>
<img src={WorkingHere }/>
    <ContainerText>
      <Mensagem>Estamos trabalhando nessa melhoria! Volte em breve.</Mensagem>
      <Mensagem2>Se estiver com algum problema, entre em contato com nosso suporte abaixo!</Mensagem2>
    </ContainerText>
    <ContainerEmail>
        <Zocial name="email" size={24} color="#024447" />
        <TextEmail onPress={handleEmailPress}>Contate nosso suporte!</TextEmail>
      </ContainerEmail>
  </View>
  );
};

export default App;
