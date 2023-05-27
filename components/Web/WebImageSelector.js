import * as ImagePicker from 'expo-image-picker';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Platform, Pressable, ScrollView } from 'react-native';
import { Image } from 'react-native-web';


export default function WebImageSelector() {
    const [images, setImages] = useState('');
    const [res, setRes] = useState([]);
    const [loaded, setLoad] = useState(false);
    const [image, setImage] = useState(null);

    const toogleLoaded = () => {
        setLoad((loaded) => !loaded);
    };

    async function LoadImages() {
        await pickImageAsync();
        setLoad(true);
        console.log("\nLoaded: " + loaded);

    }

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          quality: 1,
          allowsMultipleSelection: true,
          selectionLimit: 4
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
                <Text></Text>
                <Pressable
                    style={[styles.button, { backgroundColor: '#fff' }]}
                    onPress={LoadImages}
                >
                    <Text style={styles.buttonLabel}>Add Images</Text>
                </Pressable>
                {
                    loaded ?
                        res.assets.map((source, i) => {
                            console.log(i + ": " + source.uri);
                            return (

                                <View style={styles.imageContainer}>
                                    <Image
                                        id={"image_" + i}
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
        width: 200,
        height: 50,
        marginHorizontal: 20,
        alignItems: 'center',
        alignSelf: 'center'

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
        width: 1920,
        height: 1080,
        borderRadius: 18,
        alignSelf: 'flex-start',
        padding: 1,
        resizeMode: 'contain'

    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#6e6d6d',
        fontSize: 16,
    },
});



