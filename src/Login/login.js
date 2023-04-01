import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Container, Modal, ImageBackground, Button} from 'react-native';
import Menu from '../../assets/menu-hamburguer.svg';

function Login() {
    return (
      <View style={styles.fundo2}>
        {/* <ImageBackground source={require('./unsplash_o9RLeUVowG8.png')}
                       style={styles.ImageBackground} 
        ></ImageBackground> */}
        <View>
           <Text style={styles.title}>ClassCheck</Text>
           
        </View>
      
      </View>
       

      );
}

const styles = StyleSheet.create({
    Button: {
     flex: 2,
    },
    fundo2: {
      backgroundColor: '#026A6D',
      height: '80%',
      width: '100%',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: '10rem',
      borderBottomRightRadius: '10rem',
    },
    title: {
      fontSize: '50px',
      textAlign: 'center',
      lineHeight: '32px',
      letterSpacing: '0.04em;',
      color: '#32C2B9',
      height: '70%'
    },
    ImageBackground: {
      flex: 1,
    }
  });

export default Login