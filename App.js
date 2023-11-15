import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./views/Home";
import CameraView from "./views/CameraView";
import SuccessView from "./views/SuccessView";

// Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  const defOptions = {
    headerShown: false,
  }

  const successOptions = {
    headerShown: false,
  }

  const camOptions = {
    headerShown: true,
    headerTitle: '',
    headerStyle: {
      backgroundColor: "#ffdb4b",
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
        <Stack.Screen name="Success" component={SuccessView} options={successOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
