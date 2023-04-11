import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity,View, Image } from "react-native";
import Home from "./src/Home";
import LoginScreen from "./src/Login/LoginScreen";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import messaging from "@react-native-firebase/messaging";
// import Toast from "react-native-toast-message";
// import toastEmitter from "./src/services/toastEmitter";

const App = () => {
  return (
    <SafeAreaView style={{
      flex:1,
      justifyContent:'center', 
      alignItems: 'center',
      backgroudColor: '#fff',
    }}>
      <View>
        <Text style={{fontSize:30, fontWeight: 'bold', color: '#12826f'}}>
          ClassCheck
        </Text>
      </View>
      <TouchableOpacity
      // por alguma razao nao ta aparecendo a cor do backgroudColor
        style={{
          backgroudColor: '#c2f2ea',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight:'bold', fontSize:18, color:'black'}}> Cadastre</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color={'#fff'}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

// const styles = StyleSheet({
//   root:{
//     flex:1,
//     justifyContent:'center', 
//     alignItems: 'center',
//     backgroudColor: '#fff',

//   }

// });

export default App;

// export default function App() {
//   /*useEffect(() => {
//     messaging().onMessage(async (remoteMessage) => {
//       const { body, title } = remoteMessage.notification;

//       toastEmitter.emit({
//         title,
//         subtitle: body,
//       });
//     });
//   }, []);*/

//   return (
//     <>
//       {/* <Home /> */}
//       {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
//       <LoginScreen></LoginScreen>
//     </>
//   );
// }
