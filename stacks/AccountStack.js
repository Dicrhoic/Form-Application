import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../pages/SignInPage';
import AccountHome from '../pages/AccountHomePage';

const accountStack = createNativeStackNavigator();


export default function AccountStackScreen()
{
    return (
        <accountStack.Navigator>
            <accountStack.Screen name="Sign In" component={SignInScreen}/>
            <accountStack.Screen name="AccHome" component={AccountHome}/>
        </accountStack.Navigator>
    );
}

