import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';
import RenderHTML from 'react-native-render-html';
import WebView from 'react-native-webview';
import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    Dimensions,
} from "react-native";
import { Platform } from "react-native";
import Constants from 'expo-constants';

const renderers = {
    iframe: IframeRenderer
};

const customHTMLElementModels = {
    iframe: iframeModel
};

function WebViewer() {
    const contentWidth = Dimensions.get("screen").width * 1;
    let link = 'https://www.kakimashou.com/curricula/tobira/lesson-0/character-quiz?p=all';
    let expo = 'https://expo.dev';
    let iframeHolder = `<iframe width="100%" height="50%"  src='${link}' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>></iframe>`;

    if (Platform.OS === 'ios') {
        return (
            <View style={styles.item}>
                <Text style={styles.creator}></Text>
                <WebView
                        style={styles.container}
                        originWhitelist={['*']}
                        source={{ uri: expo }}
                    />
                <Text style={styles.date}>
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.item}>
            <Text style={styles.creator}>John Doe</Text>
            <Text style={styles.date}>

            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    item: {
        borderColor: 'blue',
        borderBottomWidth: 1,
        padding: 20,
        backgroundColor: "white",
        minWidth: '40%',
        minHeight: '2%',
        alignContent: 'stretch',
        flex: 10
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
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
      },
});

export default WebViewer;