import { StyleSheet, View, Text, Alert, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function ElementModal() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [element, setElement] = useState('');
    const [type, setType] = useState('');
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    function StoreElement(type) {
        setElement(type);
        setModalVisible(false);
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={isModalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!isModalVisible);
                }}>
                <View style={styles.blurredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Set Battle Type</Text>

                        <Picker
                            style={{ height: 10, width: '100%', alignContent: 'center', }}
                            selectedValue={type}
                            onValueChange={(itemValue, itemIndex) =>
                                StoreElement(itemValue)
                            }>
                            <Picker.Item label="Fire" value="Fire" />
                            <Picker.Item label="Wind" value="Wind" />
                            <Picker.Item label="Water" value="Water" />
                            <Picker.Item label="Earth" value="Earth" />
                            <Picker.Item label="Dark" value="Dark" />
                            <Picker.Item label="Light" value="Light" />
                        </Picker>

                    </View>
                </View>
            </Modal>
            <Text style={styles.label}
                onPress={toggleModal}
            >Element: {element}</Text>
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