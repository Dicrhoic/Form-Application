import * as React from 'react';
import '../firebase/firebase';
import { Text, View, StyleSheet, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import HomePage from '../pages/HomePage';
import TeamPage from '../pages/TeamPage';
import TeamsDropDown from '../components/TeamsDropDown';
import SettingsPage from '../pages/SettingsPage';
import DrawerNav from '../components/DrawerNav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignInScreen from '../pages/SignInPage';
import LoginIndex from '../pages/LoginIndex';
import AccountPage from '../pages/AccountPage';
import AccountStackScreen from '../stacks/AccountStack';
import TeamStackScreen from '../stacks/TeamStack';
import Modal from 'react-native-modal';
import { useState } from 'react';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import HomeStackScreen from '../stacks/HomeStack';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function EmptyScreen(){
  return(
    <View/>
  );
}

const SideModal = ({screenName}) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isIconVisible, setIconVisible] = useState(true);
 

  const toggleModal = () => {
      setModalVisible(!isModalVisible);
      setIconVisible(!isIconVisible);
  };

  return (
      <View>
          <Modal
              isVisible={isModalVisible}
              transparent={true}            
              onBackdropPress={()=> setModalVisible(false)}
              onSwipeComplete={()=> setModalVisible(false)}
              swipeDirection="right"
              animationIn={'slideInRight'}
              animationOut={'slideOutRight'}
              animationInTiming={1000}
              animationOutTiming={1000}
              backdropTransitionInTiming={800}
              backdropTransitionOutTiming={800}
          >           
          <View style={styles.centeredView}>
           
                  <Text>I am the modal content!</Text>
                  <Button label={"Home"} onPress={() => navigation.navigate(screenName)}></Button>
              </View>

          </Modal>
          <Ionicons
              name={'reorder-four-outline'}
              onPress={toggleModal}
              size={32}
              alignSelf='center'
              visible={isIconVisible}
          >                
          </Ionicons>
          <StatusBar/>


      </View>
  );
}

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                name={
                  focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                }
                size={size}
                color={color}
              />
            );
          }
          if (route.name === 'Teams') {
            return (
              <Ionicons
                name={
                  focused
                    ? 'add-outline'
                    : 'add-sharp'
                }
                size={size}
                color={color}
              />
            );
          }
          if (route.name === 'Account') {
            return (
              <Ionicons
                name={focused ? 'person-outline' : 'person-circle-outline'}
                size={size}
                color={color}
              />
            );
          }
          else if (route.name === 'Settings') {
            return (
              <Ionicons
                name={focused ? 'settings-outline' : 'reorder-four-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'skyblue',
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen}
        options={
          {
            headerShown: false
          }
        } />
      <Tab.Screen name="Teams" options={{headerShown: false}} component={TeamStackScreen} />
      <Tab.Screen name="Account"  component={AccountStackScreen}
        options={
          {
            headerShown: false
          }
        }
      />
      <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>

  );
}


const styles = StyleSheet.create({
  body:
  {   
    
    
  },
  centeredView: {
        
      height: Dimensions.get("screen").height,
      width: Dimensions.get("window").width,
      backgroundColor: '#e5e5e6',
      paddingTop: Dimensions.get("screen").height * 0.105,
      marginLeft: Dimensions.get("window").width * 0.18,
      paddingLeft: Dimensions.get("screen").width * 0.010,
      
    },
  
})

export default AppNavigator;