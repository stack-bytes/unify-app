import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationBar } from './NavigationBar';

import PronounsScreen from '../screens/ProfileStack/PronounsScreen';

const Stack = createStackNavigator();

export const MainStack = ({ navigation }) => {
  
  return (
    <Stack.Navigator 
      initialRouteName='PronounsScreen'
      screenOptions={{
        detachPreviousScreen: false,
      }}
      id='MainStack'
      >

      <Stack.Screen name="NavigationBar" component={NavigationBar} options={{
           headerShown: false, 
           gestureEnabled: false,
      }}/>

      <Stack.Screen name="PronounsScreen" component={PronounsScreen} options={{
        headerShown: false, 
        gestureEnabled: false,
      }}/>

    </Stack.Navigator>
  );
};