import React from 'react';
import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { TextInput } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native';
import SignUpModal from '../components/Modals/SignUpModal';


const SignInScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [createVisible, setCreate] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const toggleSignUp = () =>
  {
    setCreate(true);
  }

  const auth = getAuth();
  const [value, setValue] = useState({
    email: '',
    password: '',
    error: ''
  })

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
      toggleModal();
    }
  }
  if (Platform.OS === 'web') {
    return (

      <View style={styles.container}>
        <Text>SignInPage</Text>
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
            <Ionicons name="mail-outline"
              size={32}
            >
            </Ionicons>
            <TextInput
              style={styles.webInput}
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

          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="lock-closed-outline"
              size={32}
            >
            </Ionicons>
            <TextInput
              style={styles.webInput}
              placeholder='Password'
              containerStyle={styles.control}
              value={value.password}
              onChangeText={(text) => setValue({ ...value, password: text })}
              secureTextEntry={true}
              leftIcon={<Icon
                name='key'
                size={16}
              />}
            />
          </View>
          <Button label="Sign in" onPress={signIn} />
        </View>

      </View>
    );
  }
  if (Platform.OS === 'ios') {

    return (
      <View style={styles.container}>
        <Text>Log into your Account</Text>
        <ScrollView keyboardShouldPersistTaps='handled'
          scrollEnabled='false'
        >
          <Modal
            onBackdropPress={() => setCreate(false)}
            isVisible={createVisible}
            style={{margin: 0, paddingTop: 100, alignContent: 'center'}}
            swipeDirection="down"
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
              <Ionicons name="mail-outline"
                size={32}
              >
              </Ionicons>
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

            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="lock-closed-outline"
                size={32}
              >
              </Ionicons>
              <TextInput
                style={styles.input}
                placeholder='Password'
                containerStyle={styles.control}
                value={value.password}
                onChangeText={(text) => setValue({ ...value, password: text })}
                secureTextEntry={true}
                leftIcon={<Icon
                  name='key'
                  size={16}
                />}
              />
            </View>
            <Button label="Sign in" onPress={signIn} />
            <Button label="Sign Up" onPress={toggleSignUp} />
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

export default SignInScreen;