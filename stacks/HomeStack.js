import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Alert, Dimensions } from 'react-native';
import HomePage from '../pages/HomePage';
import SideModal from '../components/Modals/SideModal';

const HomeStack = createNativeStackNavigator();
function EmptyScreen(){
    return(
      <View/>
    );
  }
  
function HomeStackScreen(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home Page" component={HomePage} 
            options={
                {
                  headerRight: () => (
                    <SideModal screenName={'HTest'}></SideModal>
                  )
                  
                }
              } 
            />
            <HomeStack.Screen name="HTest" component={EmptyScreen}/>

        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;