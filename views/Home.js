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
        <Image
          style={[styles.speaker, {width: '50%'}]}
          source={require('../assets/lego_speaker.png')}
          resizeMode={'contain'}
        />
        <Image
          style={[styles.chat, {width: '90%'}]}
          source={require('../assets/chat_bubble.png')}
          resizeMode={'contain'}
        />
        <Image
          style={[styles.textChat, {width: '70%'}]}
          source={require('../assets/take_a_pic.png')}
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
  speaker: {
    position: 'absolute',
    top: -30,
    left: 0,
  },
  chat: {
    position: 'absolute',
    top: -260,
  },
  textChat: {
    position: 'absolute',
    top: 230,
  },
});

export default Home;
