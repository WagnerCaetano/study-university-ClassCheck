import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from '../../assets/menu-hamburguer.svg'

function Home() {
    return (
        <View style={styles.header}>
          <Text style={styles.title}>ClassCheck</Text>
          <img style={styles.img} src={Menu}/>
        </View>
      );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'rgba(4, 105, 56, 0.87);',
      height: '68px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: '24px',
      textAlign: 'center',
      lineHeight: '32px',
      letterSpacing: '0.04em;',
      color: 'rgba(255, 255, 255, 0.65);',
    },
    img: {
      position: 'absolute',
      left: '13px',
    }
  });

export default Home