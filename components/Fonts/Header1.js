import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    useFonts,
    ShipporiMinchoB1_400Regular,
    ShipporiMinchoB1_500Medium,
    ShipporiMinchoB1_600SemiBold,
    ShipporiMinchoB1_800ExtraBold,
  } from '@expo-google-fonts/shippori-mincho-b1';
  

export default function Header1({ text }) {
    let [fontsLoaded] = useFonts({
        ShipporiMinchoB1_400Regular,
        ShipporiMinchoB1_500Medium,
        ShipporiMinchoB1_600SemiBold,
        ShipporiMinchoB1_800ExtraBold,
    });

    if (!fontsLoaded) {
        console.log("Can't load some fonts");
    }
    return (

        <Text style={{ fontFamily: 'ShipporiMinchoB1_800ExtraBold', fontSize: 20 }}>{text}</Text>
        );
}