import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationBar } from './NavigationBar';
import { AuthStack } from './AuthStack';
import PronounsScreen from '../screens/ProfileStack/PronounsScreen';
import { CameraScreen } from '../screens/HomeStack/CameraScreen';
import PhotoScreen from '../screens/MainStack/PhotoScreen';

const Stack = createStackNavigator();

export const MainStack = ({ navigation }) => {
  
  return (
    <Stack.Navigator 
      initialRouteName='NavigationBar'
      screenOptions={{
        detachPreviousScreen: false,
      }}
      id='MainStack'
      >

      <Stack.Screen name="NavigationBar" component={NavigationBar} options={{
           headerShown: false, 
           gestureEnabled: true,
           open: {
            animation: 'timing',
            config: {
              duration: 300,
            },
           },
           close: {
            animation: 'timing',
            config: {
              duration: 300,
            },
           }
      }}/>

      <Stack.Screen name="AuthStack" component={AuthStack} options={{
        headerShown: false, 
        gestureEnabled: true,
      }}/>

      <Stack.Screen name="CameraScreen" component={CameraScreen} options={{
          headerShown: false, 
          gestureEnabled: true,
      }}/>

      <Stack.Screen name="PhotoScreen" component={PhotoScreen} options={{
          headerShown: false, 
          gestureEnabled: false,
      }}/>

    </Stack.Navigator>
  );
};