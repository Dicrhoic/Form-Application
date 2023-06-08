import React from 'react';
import { Pressable, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native';
import Button from '../Button.js';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function SignUpModal(){
    const [isModalVisible, setModalVisible] = useState(false);
    const [createVisible, setCreate] = useState(false);
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    setValue({
      ...value,
      error: ''
    })
  }

  if (Platform.OS === 'ios') {

    return (
      <View style={styles.container}>
        <Text>Create an Account</Text>
        <ScrollView keyboardShouldPersistTaps='handled'
          scrollEnabled='false'
        >
          <Modal
            isVisible={createVisible}
          >
            <SignUpModal></SignUpModal>
          </Modal>

          <Modal
            isVisible={isModalVisible}
            transparent={true}
            onBackdropPress={() => setModalVisible(false)}
            animationIn={'shake'}
            animationOut={'fadeOut'}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
          >
            {!!value.error && <View style={styles.error}>
              <Text>{value.error}</Text></View>}
          </Modal>
          <View style={styles.controls}>
            <View style={styles.inputBox}>
            <TextInput
                style={styles.input}
                placeholder='Email'
                containerStyle={styles.control}
                value={value.email}
                onChangeText={(text) => setValue({ ...value, email: text })}
                leftIcon={<Icon
                  name='envelope'
                  size={16}
                />}
              />
            </View>
            <Button label="Sign up" />
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    controls: {
      flex: 1,
      alignItems: 'center',
    },
  
    control: {
      marginTop: 10
    },
  
    error: {
      marginTop: 10,
      padding: 10,
      color: '#fff',
      backgroundColor: 'white',
      textAlign: 'center',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },
    inputBox:
    {
      flexDirection: 'row',
      marginBottom: 10,
  
    },
    webInput: {
      textAlign: 'center',
      width: Dimensions.get('screen').width * 0.4,
      height: 32,
      margin: 12,
      borderWidth: 1,
      padding: 2,
      alignSelf: 'center',
    },
    input: {
      textAlign: 'center',
      width: Dimensions.get('screen').width * 0.7,
      height: 32,
      margin: 12,
      borderWidth: 1,
      padding: 2,
      alignSelf: 'center',
    },
  
  });
  

