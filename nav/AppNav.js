import * as React from 'react';
import '../firebase/firebase';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import HomePage from '../pages/HomePage';
import TeamPage from '../pages/TeamPage';
import TeamsDropDown from '../components/TeamsDropDown';
import SettingsPage from '../pages/SettingsPage';
import DrawerNav from '../components/DrawerNav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideModal from '../components/Modals/SideModal';
import SignInScreen from '../pages/SignInPage';
import LoginIndex from '../pages/LoginIndex';
import AccountPage from '../pages/AccountPage';
import AccountStackScreen from '../stacks/AccountStack';
import TeamStackScreen from '../stacks/TeamStack';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
      <Tab.Screen name="Home" component={HomePage}
        options={
          {
            headerRight: () => (
              <SideModal></SideModal>
            )
          }
        } />
      <Tab.Screen name="Teams" options={{headerShown: false}} component={TeamStackScreen} />
      <Tab.Screen name="Settings" component={SettingsPage} />
      <Tab.Screen name="Account"  component={AccountStackScreen}
        options={
          {
            headerShown: false
          }
        }
      />
    </Tab.Navigator>

  );
}

export default AppNavigator;