import { StyleSheet, View, Text, Alert, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';
import Button from '../Button';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


function SideModal() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isIconVisible, setIconVisible] = useState(true);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setIconVisible(!isIconVisible);
    };

    return (
        <View>
            <Modal
                isVisible={isModalVisible}
                transparent={true}            
                onBackdropPress={()=> setModalVisible(false)}
                onSwipeComplete={()=> setModalVisible(false)}
                swipeDirection="right"
                animationIn={'slideInRight'}
                animationOut={'slideOutRight'}
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropTransitionInTiming={800}
                backdropTransitionOutTiming={800}
            >           
            <View style={styles.centeredView}>
             
                    <Text>I am the modal content!</Text>
                </View>

            </Modal>
            <Ionicons
                name={'reorder-four-outline'}
                onPress={toggleModal}
                size={32}
                alignSelf='center'
                visible={isIconVisible}
            >                
            </Ionicons>
            <StatusBar/>


        </View>
    );
}

const styles = StyleSheet.create({
    body:
    {   
      
      
    },
    centeredView: {
          
        height: Dimensions.get("screen").height,
        width: Dimensions.get("window").width,
        backgroundColor: '#e5e5e6',
        paddingTop: Dimensions.get("screen").height * 0.105,
        marginLeft: Dimensions.get("window").width * 0.18,
        paddingLeft: Dimensions.get("screen").width * 0.010,
        
      },
    
})

export default SideModal;