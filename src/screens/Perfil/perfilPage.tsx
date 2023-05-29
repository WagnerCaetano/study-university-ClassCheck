import * as React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { Title, Description, TextLabel, ContainerPerfil, WrapperContent, WrapperPicture } from "./styles";
import { InfoContext } from "../../context/context";
import ProfilePicture from "./components/ProfilePicture/profilePicture";

const PerfilPage = () => {
  const { userInfo }: any = React.useContext(InfoContext);

  const treatPhone = (phone) => {
    phone = phone.replace("+55", "");
    phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    return phone;
  };

  return (
    <ScrollView>
      {userInfo === null ? (
        <ActivityIndicator size="large" />
      ) : (
        <ContainerPerfil>
          <WrapperPicture>
            <Title>Perfil do Aluno</Title>
            <ProfilePicture />
            <Title>{userInfo.filho.nome}</Title>
          </WrapperPicture>
          <WrapperContent>
            <Description>RA (matrícula do aluno):</Description>
            <TextLabel>{userInfo.filho.nome}</TextLabel>
          </WrapperContent>
          <WrapperContent>
            <Description>Série:</Description>
            <TextLabel>{userInfo.filho.serie}</TextLabel>
          </WrapperContent>
          <WrapperContent>
            <Description>Contato:</Description>
            <TextLabel>{treatPhone(userInfo.telefone)}</TextLabel>
          </WrapperContent>
          <WrapperContent>
            <Description>E-mail:</Description>
            <TextLabel>{userInfo.email}</TextLabel>
          </WrapperContent>
        </ContainerPerfil>
      )}
    </ScrollView>
  );
};

export default PerfilPage;
