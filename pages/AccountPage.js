import React from 'react';
import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { TextInput } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native';
import { useAuthentication } from '../firebase/AuthenticationHook';
import SignInScreen from './SignInPage';
import AccountHome from './AccountHomePage';

export default function AccountPage(){
    const { user } = useAuthentication();
    console.log(user);
    return(
        user ? 
        <AccountHome></AccountHome>
        :
        <SignInScreen></SignInScreen>
    );
}