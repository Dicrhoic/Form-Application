import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './nav/AppNav';

export default function App() {

  
  return (
    <NavigationContainer>
      <AppNavigator/>
      <StatusBar/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
