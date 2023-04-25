import { Text, TextInput, ScrollView } from "react-native";
import { Container } from "../../global/ContainerView/container";
import styled from "styled-components";
import ButtonBack from "../../components/ButtonBack/styles";
import ProfilePicture from "../../components/ProfilePicture/styles";
import Icon from "react-native-vector-icons/FontAwesome";

const Title = styled.text`
  position: absolute;
  width: ${(props) => props.width || 0};
  height: 29px;
  left: ${(props) => props.left || 0};
  top: ${(props) => props.top || 0};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.04em;

  color: #026a6c;
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

const Description = styled.text`
  position: absolute;
  left: 35px;
  top: ${(props) => props.top};

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 259.1%;

  display: flex;
  align-items: center;

  color: #000000;
`;
// export a simple home screen component and use styles from styles.ts file as "styled-components"
export default function PerfilPage() {
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
      <Icon name="fa-sharp fa-solid fa-pencil" size="32" color="#FFF" />
      <Description top={"386px"}>RA (matrícula do aluno)</Description>
      <Input top={"427px"} placeholder="2022045896" disabled></Input>

      <Description top={"463px"}>Série</Description>
      <Input top={"504px"} placeholder="3° ano A" disabled></Input>

      <Description top={"540px"}>Contato</Description>
      <Input top={"581px"} placeholder="(19) 99965-6454" disabled></Input>

      <Description top={"617px"}>E-mail</Description>
      <Input top={"658px"} placeholder="umemailqualquer@gmail.com" disabled></Input>
    </ScrollView>
  );
}
