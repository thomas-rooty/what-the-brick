import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import CameraView from "./CameraView";

// Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  const defOptions = {
    headerShown: false,
  }

  const camOptions = {
    headerShown: true,
    headerTitle: '',
    headerStyle: {
      backgroundColor: "#000",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={defOptions} />
        <Stack.Screen name="Camera" component={CameraView} options={camOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
