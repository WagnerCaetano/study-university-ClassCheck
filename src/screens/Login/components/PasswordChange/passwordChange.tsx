import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SigninContext } from "../../../../context/context";
import { showToast } from "../../../../global/toast/toastProvider";

const PasswordChangeScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { userData }: any = React.useContext(SigninContext);
  const navigation = useNavigation<any>();

  const handlePasswordChange = async () => {
    try {
      console.log(userData);
      userData.completeNewPasswordChallenge(
        newPassword,
        { name: userData.username },
        {
          onSuccess: (result: any) => {
            showToast("Senha alterada com sucesso !");
            navigation.navigate("Home");
          },
          onFailure: (err: any) => {
            showToast("Erro na alteração da senha !");
            console.log("Password change failed", err);
          },
        }
      );
    } catch (err: any) {
      console.log("Password change failed", err);
      showToast("Erro ao alterar a senha, tente novamente mais tarde.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Senha Atual"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handlePasswordChange}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#026a6d",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#026a6d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PasswordChangeScreen;
