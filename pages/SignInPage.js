import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { TextInput } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';



const SignInScreen = () => {

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
    }
  }
  if (Platform.OS === 'windows') {
    return (

      <View style={styles.container}>
        <Text>SignInPage</Text>
        {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
        <View style={styles.controls}>
          <Ionicons name="mail-outline"
            size={32}
          >
          </Ionicons>
          <TextInput
            placeholder='Email'
            containerStyle={styles.control}
            value={value.email}
            onChangeText={(text) => setValue({ ...value, email: text })}
            leftIcon={<Icon
              name='envelope'
              size={16}
            />}
          />
          <Ionicons name="lock-closed-outline"
            size={32}
          >
          </Ionicons>
          <TextInput
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

          <Button title="Sign in" onPress={signIn} />
        </View>

      </View>
    );
  }
  if (Platform.OS === 'ios') {

    return (
      <View style={styles.container}>
        <Text>SignInPage</Text>
        {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
        <View style={styles.controls}>
          <Ionicons name="mail-outline"
            size={32}
          >
          </Ionicons>
          <TextInput
            placeholder='Email'
            containerStyle={styles.control}
            value={value.email}
            onChangeText={(text) => setValue({ ...value, email: text })}
            leftIcon={<Icon
              name='envelope'
              size={16}
            />}
          />
          <Ionicons name="lock-closed-outline"
            size={32}
          >
          </Ionicons>
          <TextInput
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

          <Button title="Sign in" onPress={signIn} />
        </View>

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
  },

  control: {
    marginTop: 10
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
});

export default SignInScreen;