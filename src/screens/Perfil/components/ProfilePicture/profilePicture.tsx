import React from "react";
import { InfoContext } from "../../../../context/context";
import { View } from "react-native";
import { ProfileImage, ProfileWrapper } from "./styles";

export default function ProfilePicture() {
  const { userInfo }: any = React.useContext(InfoContext);

  return (
    <ProfileWrapper>
      <ProfileImage
        source={{
          uri: "https://photos173431-staging.s3.sa-east-1.amazonaws.com/public/" + userInfo.matricula + ".jpg",
        }}
      />
    </ProfileWrapper>
  );
}
