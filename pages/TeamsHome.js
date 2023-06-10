import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function TeamHomeScreen(){
    return(
        <View style={styles.main}>
            <Text>Teams Home</Text>
        </View>
    );
}

const styles = StyleSheet.create(
   {
    main:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
    }
)