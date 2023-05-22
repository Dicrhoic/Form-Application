import { StyleSheet, View, Text, Platform, Pressable, Alert, StatusBar, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from 'react';



export default function Selection() {
    const [isModalVisible, setModalVisible] = useState(true);
    const [type, setType] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    function StoreType(type)
    {
        setType(type);
        setModalVisible(false);
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!isModalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>

                        <Picker
                    style={{ height: 10, width: '100%', alignContent: 'center', }}
                    selectedValue={type}
                    onValueChange={(itemValue, itemIndex) =>
                        StoreType(itemValue)
                    }>
                    <Picker.Item label="Full-Auto" value="fa" />
                    <Picker.Item label="Semi-Auto" value="sa" />
                    <Picker.Item label="Manual" value="m" />
                </Picker>
                        
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, { backgroundColor: '#fff' }]}
                onPress={toggleModal}
            >
            </Pressable>

        </View>

    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        marginTop: 22,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
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