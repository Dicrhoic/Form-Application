import { StyleSheet, View, Text, Platform, Pressable, Alert, StatusBar, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from 'react';
import { BlurView } from 'expo-blur';

import TypeModal from './Modals/TypeModal';
import ElementModal from './Modals/ElementModal';

export default function Selection() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [type, setType] = useState('');
    const [isBlurVisisble, setBlur] = useState(true);
    const [element, setElement] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setBlur(!isBlurVisisble);
    };

    function StoreType(type) {
        setType(type);
        setModalVisible(false);
        setBlur(false);
    }

    function StoreElement(type) {
        setElement(type);
        setModalVisible(false);
        setBlur(false);
    }

    return (
        <View style={styles.centeredView}>
            <TypeModal></TypeModal>
            <ElementModal></ElementModal>
        </View>

    );
}

const styles = StyleSheet.create({
    blurredView:
    {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#000000AA',
    },
    label: {
        alignItems: 'center',
        alignSelf: 'center',
    },
    centeredView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: '35%'

    },
    button: {
        borderRadius: 10,
        width: '50%',
        height: '35%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    modalView: {
        height: '45%',
        width: '100%',
        margin: 0,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'baseline',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});