import React from 'react';
import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { TextInput } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native';
import { useAuthentication } from '../firebase/AuthenticationHook';

export default function AccountHome(){
    const { user } = useAuthentication();
    const auth = getAuth();
    console.log(user);
    return(
        <View>
            <Text>Welcome {user?.email}</Text>
            <Button label="Sign Out"  onPress={() => signOut(auth)} />
        </View>
    );
}