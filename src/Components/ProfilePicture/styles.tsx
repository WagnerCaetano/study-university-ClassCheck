import styled from "styled-components/native";
import image from "./Foto.png";
import React from "react";
import { InfoContext } from "../../context/context";

const Photo = styled.Image`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 88px;
  top: 109px;
  border-radius: 50%;
  border: 4px solid #6dae86;
  object-fit: cover;
`;

export default function ProfilePicture() {
  const { userInfo }: any = React.useContext(InfoContext);

  return (
    <Photo
      source={{
        uri: "https://photos173431-staging.s3.sa-east-1.amazonaws.com/public/" + userInfo.matricula + ".jpg",
      }}
    />
  );
}
