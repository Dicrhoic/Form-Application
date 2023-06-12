import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

const SideStak = createNativeStackNavigator();

function Test(){
    return(
        <View>
            <Text>Option 1</Text>
        </View>
    );
}

function Test2(){
    return(
        <View>
            <Text>Option 2</Text>
        </View>
    );
}

export default function SidePanelStack()
{
    return(
        <SideStak.Navigator>
        <SideStak.Screen name="T" component={Test}></SideStak.Screen>
        <SideStak.Screen name="T2" component={Test2}></SideStak.Screen>
    </SideStak.Navigator>
    );
}