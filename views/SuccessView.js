import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Image, ImageBackground, Text, ScrollView} from 'react-native';

const SuccessView = (guessedBricks) => {
  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!guessedBricks.bricks.predictions) {
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
          <View style={styles.table}>
            <Text style={{fontSize: 25, textAlign: 'center'}}>Aucun Lego reconnu !</Text>
          </View>
          <StatusBar style="auto"/>
        </View>
      </ImageBackground>
    );
  }

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
        <ScrollView style={styles.table}>
          {guessedBricks.bricks.predictions.map((brick) => {
            return (
              <View key={brick.url} style={{flexDirection: 'row', marginBottom: 10}}>
                <Image
                  style={{width: 100, height: 100, borderRadius: 40}}
                  source={{uri: brick.url}}
                />
                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Text style={{fontSize: 20, marginLeft: 10, fontFamily: 'Avenir', fontWeight: 'bold'}}>{capitalizeFirstLetter(brick.label)}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
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
    top: 10,
  },
  table: {
    position: 'absolute',
    top: 120,
    width: '95%',
    height: '75%',
    backgroundColor: 'rgba(255,107,107,0.66)',
    borderWidth: 2,
    borderColor: 'white',
    padding: 20,
  },
});

export default SuccessView;
