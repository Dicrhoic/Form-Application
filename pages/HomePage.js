import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ScreenNav from '../nav/ScreenNav';
import HomeTopNav from '../nav/HomeTopNav';

function HomePage() {
  return (
    <View style={styles.container}>
      <HomeTopNav></HomeTopNav>
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
