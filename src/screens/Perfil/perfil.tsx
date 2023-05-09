import * as React from "react";
import { ScrollView } from "react-native";
import ButtonBack from "../../components/ButtonBack/styles";
import ProfilePicture from "../../components/ProfilePicture/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Title, Description, Input } from "./styles";

const PerfilPage = () => {
  return (
    <ScrollView>
      <ButtonBack />
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
