import { StyleSheet, View, Pressable, Text, Dimensions } from 'react-native';

export default function SideNode({ label , onPress}) {

  return (
    <View style={styles.buttonContainer}>
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: Dimensions.get('window').width * 0.75,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 3,
    color: 'black',
    paddingRight: 50
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#c2c2c2'
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: 'black',
    fontSize: 16,
  },
});
