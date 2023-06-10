import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeamsDropDown from '../components/TeamsDropDown';
import TeamHomeScreen from '../pages/TeamsHome';
import { View, Text } from 'react-native';
import Button from '../components/Button';

const TeamStack = createNativeStackNavigator();

function HomeTeam({ navigation }) {
    return (
        <View>
            <TeamHomeScreen></TeamHomeScreen>
            <View style={{ alignItems: 'center' }}>
                <Button
                    label="New"
                    onPress={() => navigation.navigate('Sharer')}
                />
            </View>

        </View>
    );
}

export default function TeamStackScreen() {

    return (
        <TeamStack.Navigator>
            <TeamStack.Screen name={"Teams "} component={HomeTeam} />
            <TeamStack.Screen name={"Sharer"} component={TeamsDropDown} />
        </TeamStack.Navigator>
    );
}

