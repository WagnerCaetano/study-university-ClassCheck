import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Home() {
    return (
        <View style={styles.header}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'red',
      height: '68px',
    },
  });

export default Home