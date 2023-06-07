import { StyleSheet, View, Text, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import Modal from 'react-native-modal';

export default function TypeModal() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [type, setType] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    function StoreType(type) {
        setType(type);
        setModalVisible(false);
    }
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType={'fade'}
                transparent={true}
                isVisible={isModalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!isModalVisible);
                }}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Set Battle Type</Text>

                    <Picker
                        style={{ height: 20, width: '100%', alignContent: 'center', }}
                        selectedValue={type}
                        onValueChange={(itemValue, itemIndex) =>
                            StoreType(itemValue)
                        }>
                        <Picker.Item label="Full-Auto" value="Full-Auto" />
                        <Picker.Item label="Semi-Auto" value="Semi-Auto" />
                        <Picker.Item label="Manual" value="Manual" />
                    </Picker>

                </View>
            </Modal>
            <Text style={styles.label}
                onPress={toggleModal}
            >Battle Type: {type}</Text>
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