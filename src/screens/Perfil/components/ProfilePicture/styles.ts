import { Image } from "react-native";
import styled from "styled-components/native";

export const ProfileImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #6dae86;
  object-fit: cover;
` as typeof Image;

export const ProfileWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
