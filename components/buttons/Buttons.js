import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export const WtbButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>What the Brick ?!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: '#181818',
    padding: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#3f3f3f',
    borderRadius: 6,
  },
  text: {
    color: '#949494',
  }
});
