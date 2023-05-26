import { StyleSheet, View, Text, Platform, Pressable, ScrollView, StatusBar, SafeAreaView, TextInput } from "react-native-web";
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect, useRef } from 'react';
import Header1 from "../Fonts/Header1";
import Selection from "../Selection";
import * as Clipboard from 'expo-clipboard';
import ImageSelector from "../ImageSelector";

export default function WebTeamCreator() {
    const imageRef = useRef();

    return (
        <View style={styles.container}>
            <View ref={imageRef} style={styles.buttonContainer}>
                <View style={styles.top} >
                    <Header1 text="Battle Date"></Header1>
                    <Selection></Selection>
                    <TextInput
                        style={styles.input}
                        maxLength={8}
                    >
                    </TextInput>
                </View>
                <View style={styles.mid}>
                    <ScrollView >
                        <ImageSelector></ImageSelector>
                    </ScrollView>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    top:
    {
        backgroundColor: '#f2f2f2',
        flex: 1,
        width: '100%'

    },
    mid:
    {
        backgroundColor: 'blue',
        flex: 6,
        width: '100%'
    },
    bottom:
    {
        width: '5%',
        height: '5%',
        backgroundColor: 'orange',
        alignSelf: 'baseline'
    },
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    scroller: {
        flex: 1,

    },
    contentContainer: {
        paddingVertical: 20
    },
    buttonContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
    buttonIcon: {
        paddingRight: 8,
    },
    input: {
        width: '50%',
        height: 25,
        margin: 12,
        borderWidth: 1,
        padding: 2,
        alignSelf: 'center',
    },

});
