import {Camera, CameraType} from 'expo-camera';
import {useRef, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, Animated, TouchableWithoutFeedback} from 'react-native';
import {sendPhotoToServer, guessBricks} from "../handlers/api_handler";

const CameraView = () => {
  const cameraRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [viewState, setViewState] = useState('camera');
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [guessedBricks, setGuessedBricks] = useState([]);
  const scale = useRef(new Animated.Value(1)).current;

  // Function to start the continuous bounce animation
  const startBouncing = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  // Function to handle button press
  const animateButton = (pressIn = false) => {
    Animated.spring(scale, {
      toValue: pressIn ? 0.8 : 1, // Stronger bounce when pressed
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      if (!pressIn) {
        startBouncing(); // Resume bouncing after press
      }
    });
  };

  // Start bouncing when component mounts
  useEffect(() => {
    startBouncing();
  }, []);

  const takePhoto = async () => {
    setLoading(true);
    setViewState('loading'); // switch to loading view
    const photo = await cameraRef.current.takePictureAsync();
    const bricks = await sendPhotoToServer(photo)
    const guessed_bricks = await guessBricks(bricks)
    setGuessedBricks(guessed_bricks)
    console.log(guessed_bricks)
    setLoading(false);
    setViewState('success'); // switch to success view
  }

  if (!permission) {
    return <View/>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission"/>
      </View>
    );
  }

  if (viewState === 'loading') {
    return (
      <View style={styles.container}>
        <Text>Guessing the bricks...</Text>
      </View>
    );
  }

  if (viewState === 'success') {
    return (
      <View style={styles.container}>
        <Text>Success!</Text>
      </View>
    );
  }

  // Camera view
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={CameraType.back} ref={cameraRef}>
        <View style={styles.focuser}/>
        <View style={styles.button}>
          <TouchableWithoutFeedback
            onPressIn={() => animateButton(true)}
            onPressOut={() => animateButton(false)}
            onPress={takePhoto}
          >
            <Animated.Image
              source={require('../assets/wtb_icon.png')}
              style={[
                styles.wtb,
                {transform: [{scale}]}
              ]}
            />
          </TouchableWithoutFeedback>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  focuser: {
    alignSelf: 'center',
    position: 'absolute',
    top: 10,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    height: '72%',
    width: '85%',
  },
  button: {
    position: 'absolute',
    bottom: 66,
    alignSelf: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  wtb: {
    width: 100,
    height: 100,
  }
});

export default CameraView;
