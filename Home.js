import {StatusBar} from 'expo-status-bar';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import CameraView from "./CameraView";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Stack Navigator
const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.text}>What the Brick ?!</Text>
      </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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

export default Home;
