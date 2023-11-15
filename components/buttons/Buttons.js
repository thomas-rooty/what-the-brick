import {TouchableOpacity, StyleSheet, Image} from 'react-native';

export const WtbButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require('../../assets/buttons/main_button.png')}
        style={styles.wtbIcon}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: '10%',
    width: '80%',
    height: undefined,
    aspectRatio: 915 / 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wtbIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
