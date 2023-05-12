import * as React from "react";
import { ScrollView, View, Text } from "react-native";
import ButtonBack from "../../components/ButtonBack/styles";
import ProfilePicture from "../../components/ProfilePicture/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Title, Description, Input } from "./styles";
import { getInfoAluno } from "../../api/classCheckServices";
import { useEffect, useState } from "react";
import { API, Amplify } from "aws-amplify";

const PerfilPage = () => {
  const [meuJson, setMeuJson] = useState(null);

  useEffect(() => {
    const fetchMeuJson = async () => {
      try {
        const response = await API.get('classcheckapi', '/matricula', {});
        setMeuJson(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeuJson();
  }, []);
  return (
    <ScrollView>
      <ButtonBack />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {meuJson ? (
        <View>
          <Text>Valor da chave 1: {meuJson.chave1}</Text>
          <Text>Valor da chave 2: {meuJson.chave2}</Text>
          <Text>Valor da chave 3: {meuJson.chave3}</Text>
        </View>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
      <Title width={"193px"} left={"92px"} top={"56px"}>
        Perfil do Aluno
      </Title>
      <ProfilePicture />
      <Title width={"220px"} left={"57px"} top={"333px"}>
        João Vitor Souza
      </Title>
      <Icon name="fa-sharp fa-solid fa-pencil" size={32} color="#FFF" />
      <Description top={"386px"}>RA (matrícula do aluno)</Description>
      <Input top={"427px"} placeholder="2022045896" disabled />
      <Description top={"463px"}>Série</Description>
      <Input top={"504px"} placeholder="3° ano A" disabled />
      <Description top={"540px"}>Contato</Description>
      <Input top={"581px"} placeholder="(19) 99965-6454" disabled />
      <Description top={"617px"}>E-mail</Description>
      <Input top={"658px"} placeholder="umemailqualquer@gmail.com" disabled />
    </ScrollView>
  );
};

export default PerfilPage;
