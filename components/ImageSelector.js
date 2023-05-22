import * as ImagePicker from 'expo-image-picker';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Platform, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import ImagesView from '../components/ImagesView';

export default function ImageSelector() {
  const [images, setImages] = useState('');
  const [res, setRes] = useState([]);
  const [loaded, setLoad] = useState(false);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      console.log(result);
      setImages(result);
      console.log(images);
      setRes(result);
      result.assets.map((source, i) => {
        console.log(source.uri);
      });
      console.log("\nLoaded: " + loaded);
      setLoad(true);
      console.log("\nLoaded: " + loaded);



    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View>
        <View style={styles.buttonContainer}>
          <Text>{loaded}</Text>
          <Pressable
            style={[styles.button, { backgroundColor: '#fff' }]}
            onPress={pickImageAsync}
          >
          </Pressable>
          {
            loaded ?
              res.assets.map((source, i) => {
                console.log(i + ": " + source.uri);
                return (

                  <View style={styles.imageContainer}>
                    <Text>Image</Text>
                    <Image
                      id={i}
                      style={styles.image}
                      source={source.uri}
                    >
                    </Image>
                  </View>

                );

              }) : <Text>No Images loaded</Text>
          }
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',

  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imageContainer:
  {
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 340,
    borderRadius: 18,
    alignSelf: 'flex-start'
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});



