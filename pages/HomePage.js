import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>  
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
