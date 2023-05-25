import { StyleSheet, View, Text, Platform, Pressable, ScrollView, StatusBar, SafeAreaView, TextInput } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { useState, useEffect, useRef } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImageSelector from './ImageSelector';
import Selection from './Selection';
import { Ionicons } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
import { captureRef } from 'react-native-view-shot';
import Header1 from './Fonts/Header1';
import WebTeamCreator from './Web/WebTeamCreator';


export default function TeamsDropDown() {

  const imageRef = useRef();

  const [type, setType] = useState('');
  const [minDate, setMinDate] = useState(new Date(1598051730000));
  const [date, setDate] = useState(new Date(1598051730000));
  const [snapshotImg, setSnapshotImg] = useState();
  const [time, setTime] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  function AdjustText() {
    console.log("New time: " + time);
  }

  const onShareImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        quality: 1,
      });

      console.log(localUri);
      const fileName = localUri.split('/').pop();
      console.log(encodeURI(fileName));
      await Sharing.shareAsync("file://" + localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let today = new Date();
    let date = today.getDate() + (today.getMonth() + 1) + today.getFullYear();
    setDate(today);
    setMinDate(today);
  }, []);

  if (Platform.OS === "ios") {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView >
          <View ref={imageRef}>
            <View style={styles.top} >
              <View style={styles.buttonContainer}>
                <Header1 text="Battle Date"></Header1>
                <DateTimePicker
                  value={date}
                  minimumDate={minDate}
                  onChange={onChange}

                />
              </View>
              <Selection></Selection>
              <TextInput
                style={styles.input}
                maxLength={8}
                //inputMode='numeric'
                value={time}
                onChangeText={setTime}
                textAlign='center'
                onChange={AdjustText}
              ></TextInput>
            </View>
            <View style={styles.mid}>
              <ImageSelector></ImageSelector>
            </View>
          </View>
          <View style={styles.bottom}>
            <Text>Share area</Text>
            <Ionicons
              name={'share-outline'}
              color={'blue'}
              onPress={onShareImageAsync}
              size={32}
              alignSelf='center'
            ></Ionicons>
          </View>
        </ScrollView>
      </SafeAreaView>


    );
  }
  else {
    return (
      <WebTeamCreator></WebTeamCreator>
    );
  }



}

const styles = StyleSheet.create({
  top:
  {
    backgroundColor: '#f2f2f2',
    height: 170,
    width: '100%',
  },
  mid:
  {
    backgroundColor: '#f2f2f2',
    height: 1500,
    width: '100%'
  },
  bottom:
  {
    width: '100%',
    height: 65,
    backgroundColor: 'orange',
    alignSelf: 'baseline'
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scroller: {
    flex: 1,

  },
  contentContainer: {
    paddingVertical: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
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
    color: '#fff',
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  input: {
    width: '50%',
    height: 25,
    margin: 12,
    borderWidth: 1,
    padding: 2,
    alignSelf: 'center',
  },

});
