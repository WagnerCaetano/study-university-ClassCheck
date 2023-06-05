import styled from "styled-components/native";

export const Title = styled.Text`
  width: 353px;
  height: 60px;
  font-weight: 500;
  font-size: 40px;
  line-height: 259.1%;
  /* or 104px */
  display: flex;
  align-items: center;
`;

export const Texto = styled.Text`
  width: 350px;
  height: 154px;
  left: calc(50% - 350px / 2 - 0.5px);
  top: 128px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 259.1%;
  /* or 34px */

  display: flex;
  align-items: center;
`;

export const Profiles = styled.View`
  background-color: red;
`;
export const PersonImage = styled.Image`
  width: 5em;
  height: 5em;
  border-radius: 15vw;
  object-fit: contain;
  border: 2px solid #026a6c;
`;
