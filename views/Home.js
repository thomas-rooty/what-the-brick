import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {WtbButton} from "../components/buttons/Buttons";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <WtbButton onPress={() => navigation.navigate('Camera')}/>
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
  }
});

export default Home;
