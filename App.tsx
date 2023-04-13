import React from "react";
import Tabs from "./src/navigation/tabs";
import LoginScreen from "./src/screens/Login/login";
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

  // const estalogado = false;
  // return <> estalogado ? <Tabs/> : <LoginScreen/> </>;

function App() {
  
  return <Tabs/>
    
    };



export default App;
