import { Text } from "react-native";
import { Container } from "../../global/Container/container";
import styled from "styled-components";
import ButtonBack from "../../Components/ButtonBack";
import ProfilePicture from "../../Components/ProfilePicture";

const Title = styled.text`
  position: absolute;
  width: ${props => props.width || 0};
  height: 29px;
  left:  ${props => props.left || 0};
  top:  ${props => props.top || 0};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.04em;

  color: #026A6C;
`
// export a simple home screen component and use styles from styles.ts file as "styled-components"
export default function PerfilPage() {
  return (
    <Container>
      <ButtonBack/>
      <Title width={"193px"} left={"92px"} top={"56px"}>Perfil do Aluno</Title>
      <ProfilePicture/>
      <Title width={"220px"} left={"57px"} top={"333px"}>João Vitor Souza</Title>
    </Container>
  );
}
