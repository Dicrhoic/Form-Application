import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native';

export default function ImageView({result})
{
    result.assets.map((source, i) =>
    {
      console.log(source.uri);
      return ( 
        <ScrollView>
            <Image 
                source={source.uri}
                styles={styles.image}
            >
            </Image>   
        </ScrollView>
     );
    });
}

const styles = StyleSheet.create({  
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });