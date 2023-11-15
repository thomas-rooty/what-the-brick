import {StyleSheet, Text, View, Animated} from 'react-native';
import {useEffect, useRef} from "react";

const Guessing = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  // Function to start the continuous bounce animation
  const startBouncing = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotate, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
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

  // Start bouncing when component mounts
  useEffect(() => {
    startBouncing();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/thinking_lego.png')}
        style={[
          styles.thinking,
          {transform: [{scale: scale}, {rotate: rotate.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })}]}
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  thinking: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default Guessing;
