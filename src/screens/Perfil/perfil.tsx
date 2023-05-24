import * as React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import ButtonBack from "../../components/ButtonBack/styles";
import ProfilePicture from "../../components/ProfilePicture/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Title, Description, Input } from "./styles";
import { InfoContext, SigninContext } from "../../context/context";

const PerfilPage = () => {
  const { userInfo }: any = React.useContext(InfoContext);

  const treatPhone = (phone) => {
    // remove +55 from phone
    phone = phone.replace("+55", "");
    // add () between the first 2 numbers and a space after it
    phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    return phone;
  };

  return (
    <ScrollView>
      <ButtonBack />
      {userInfo === null ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Title width={"193px"} left={"92px"} top={"56px"}>
            Perfil do Aluno
          </Title>
          <ProfilePicture />
          <Title width={"220px"} left={"57px"} top={"333px"}>
            {userInfo.filho.nome}
          </Title>
          <Icon name="fa-sharp fa-solid fa-pencil" size={32} color="#FFF" />
          <Description top={"386px"}>RA (matrícula do aluno)</Description>
          <Input top={"427px"} placeholder={userInfo.filho.nome} disabled />
          <Description top={"463px"}>Série</Description>
          <Input top={"504px"} placeholder={userInfo.filho.serie} disabled />
          <Description top={"540px"}>Contato</Description>
          <Input top={"581px"} placeholder={treatPhone(userInfo.telefone)} disabled />
          <Description top={"617px"}>E-mail</Description>
          <Input top={"658px"} placeholder={userInfo.email} disabled />
        </>
      )}
    </ScrollView>
  );
};

export default PerfilPage;
