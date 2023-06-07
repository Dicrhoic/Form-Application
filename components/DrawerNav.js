import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import SettingsPage from '../pages/SettingsPage';
import TeamPage from '../pages/TeamPage';
import HomePage from '../pages/HomePage';

function TestScreen()
{
  return(
    <View>
      <Text>Test</Text>
    </View>
  );
}


function DrawerContents(props)
{
    return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Close drawer"
            onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
          />
          <DrawerItem
            label="Toggle drawer"
            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </DrawerContentScrollView>
      );
}

const Drawer = createDrawerNavigator();

function DrawerNav(){
    return (
        <Drawer.Navigator
          useLegacyImplementation
          drawerContent={(props) => <DrawerContents {...props} />}
        >
          <Drawer.Screen name="A" component={HomePage} />
        </Drawer.Navigator>
      );
}

export default DrawerNav;