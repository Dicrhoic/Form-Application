import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import * as SQLite from 'expo-sqlite'
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import DropDownPicker from 'react-native-dropdown-picker';
import TeamsDropDown from '../components/SQLHelper';




function TeamPage() {
    const [db, setDb] = useState(SQLite.openDatabase('./assets/database/localDatabase.db'));
    const [isLoading, setIsLoading] = useState(true);
    const [names, setNames] = useState([]);

    useEffect(() => {      
        db.transaction(tx => {
          tx.executeSql('SELECT * FROM SetupDetails', null,
            (txObj, resultSet) => setNames(resultSet.rows._array),
            (txObj, error) => console.log(error)
          );
        });
    
        setIsLoading(false);
      }, []);

    if(isLoading)
    {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading Teams</Text>
          
            </View>
        );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Teams</Text>
    
      </View>
    );
  }
export default TeamPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
