import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Platform, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useState } from 'react';
import WebView from 'react-native-webview';
import Constants from 'expo-constants';



function HomeTopNav() {
    const [flexDirection, setflexDirection] = useState('column');
    let wiki = 'https://gbf.wiki/Main_Page';
    let gw = 'https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/';
    let expo = 'https://expo.dev';
    const contentWidth = Dimensions.get("screen").width * 1;
    const [website, setWebSite] = useState(expo);

    function UpdateURI(flexDirection) {
        console.log(flexDirection);
        switch (flexDirection) {
            case 'GBF Wiki':
                setWebSite(wiki);
                break;
            case 'GameWith':
                setWebSite(gw);
                break;
        }
        console.log(flexDirection);
    }

    const TabData = ({
        label,
        values,
        selectedValue,
        setSelectedValue,
    }) => (
        <View style={{ padding: 2.5 }}>
            <View style={styles.row}>
                {values.map(value => (
                    <TouchableOpacity
                        key={value}
                        onPress={() => { setSelectedValue(value), UpdateURI(value) }}
                        style={[styles.button, selectedValue === value && styles.selected]}>
                        <Text
                            style={[
                                styles.buttonLabel,
                                selectedValue === value && styles.selectedLabel,
                            ]}>
                            {value}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    if (Platform.OS === 'ios') {
        return (

            <View style={{ padding: 6 }}>
                <TabData
                    label="Useful links"
                    values={['GBF Wiki', 'GameWith']}
                    selectedValue={flexDirection}
                    setSelectedValue={setflexDirection}

                >
                </TabData>
                <WebView
                        style={styles.item}
                        originWhitelist={['*']}
                        source={{ uri: website }}
                    />
                   
            </View>

        );
    }

    return (

        <View style={{ padding: 10, flex: 1, }}>
            <TabData
                label="Useful links"
                values={['GBF Wiki', 'Gamewith']}
                selectedValue={flexDirection}
                setSelectedValue={setflexDirection}
            >
            </TabData>

        </View>

    );
}




function MyTabs() {
    return (
        <Header label={"Welcome"}></Header>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'azure ',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '50%',
        textAlign: 'center',
    },
    selected: {
        backgroundColor: 'cornflowerblue',
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: 'cornflowerblue',
    },
    selectedLabel: {
        color: 'white',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        minWidth: '100%'
    },
    item: {
        backgroundColor: "white",
        
    },
    creator: {
        fontWeight: "bold",
        fontSize: 16,
    },
    date: {
        color: 'grey',
        width: Dimensions.get("screen").width * 0.69,
    },
    content: {
        marginTop: 10,
    },
    containerA: {
       minWidth: '100%'
    },
});

export default HomeTopNav;



