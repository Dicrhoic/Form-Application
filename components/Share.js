import { Ionicons } from '@expo/vector-icons';
import { useState, useRef } from 'react';
import { StyleSheet, View, Text, Platform, Pressable, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { captureRef } from 'react-native-view-shot';
//move to main ref = ref<View ref={imageRef} 
export default function Share() {
    const viewToSnapshotRef = useRef();
    const [snapshotImg, setSnapshotImg] = useState();

    const snapshot = async () => {
        const result = await captureRef(viewToSnapshotRef, { result: 'data-uri' });
        console.log(result);
        setSnapshotImg(result);
      };
      
    async function ShareSS()
    {
      console.log("Pressed button");
      const a = await snapshot();
      if(a)
      {
          Sharing.shareAsync(snapshotImg);
      }
    
    }
      
    return (
        <View style={styles.bottom}>
            <Text>Share area</Text>
            <Ionicons
                name={'share-outline'}
                color={'blue'}
                onPress={snapshot}
            ></Ionicons>
        </View>
    );
   
}

const styles = StyleSheet.create({
    bottom:
    {
      width: '100%',
      height: 300,
      backgroundColor: 'orange',
      alignSelf: 'baseline'
    },
  });
  