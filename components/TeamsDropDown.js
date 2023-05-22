import { StyleSheet, View, Text, Platform, Pressable, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImageSelector from './ImageSelector';
import Selection from './Selection';


function openCB() {
  console.log('open!')
}
function errorCB(err) {
  console.log(err)
}



export default function TeamsDropDown({ label, theme, onPress }) {
  const [level, setLevel] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function closeModal(itemValue){
    setType(itemValue)
    setModalVisible(false);
}

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  useEffect(() => {
    let today = new Date();
    let date = today.getDate() + (today.getMonth() + 1) + today.getFullYear();
    setDate(today);
  }, []);

  if (Platform.OS === "ios") {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.top}>

            <View style={styles.buttonContainer}>
              <Text>DropDownPicker</Text>
              <DateTimePicker
                value={date}
                minimumDate={date}
                onChange={onChange}
              />
            
            </View>
            <Selection></Selection>        
          </View>
          <View style={styles.mid}>
            <ImageSelector></ImageSelector>
          </View>
          <View>

          </View>
        </ScrollView>
      </SafeAreaView>


    );
  }

  return (
    <View style={styles.container}>
      <Text>DropDownPicker</Text>
      <Picker
        selectedValue={type}
        onValueChange={(itemValue, itemIndex) =>
          setType(itemValue)
        }>
        <Picker.Item label="Full-Auto" value="fa" />
        <Picker.Item label="Semi-Auto" value="sa" />
        <Picker.Item label="Manual" value="m" />
      </Picker>
      <DateTimePicker
        value={date}
        minimumDate={date}
        onChange={onChange}
      ></DateTimePicker>
    </View>
  );


}

const styles = StyleSheet.create({
  top:
  {
    backgroundColor: 'skyblue',
    height: 200
  },
  mid:
  {
    backgroundColor: 'steelblue',
    height: 5000,
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
});
