import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import {WtbButton} from "../components/buttons/Buttons";

const Home = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/lego_bg.jpg')} // Background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          style={[styles.wtbIcon, {width: '95%'}]}
          source={require('../assets/wtb_logo.png')}
          resizeMode={'contain'}
        />
        <WtbButton onPress={() => navigation.navigate('Camera')}/>
        <StatusBar style="auto"/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    alignItems: 'center',
  },
  wtbIcon: {
    position: 'absolute',
    top: 60,
  },
});

export default Home;
