import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './Router/Routes'
import { AppRegistry } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
