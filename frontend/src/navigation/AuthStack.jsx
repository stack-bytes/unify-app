import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationBar } from './NavigationBar';

import PronounsScreen from '../screens/ProfileStack/PronounsScreen';

import AuthScreen from '../screens/AuthStack/AuthScreen';

const Stack = createStackNavigator();

export const AuthStack = ({ navigation }) => {
  
  return (
    <Stack.Navigator 
      initialRouteName='AuthScreen'
      screenOptions={{
        detachPreviousScreen: false,
      }}
      id='AuthStack'
      >

      <Stack.Screen name="AuthScreen" component={AuthScreen} options={{
           headerShown: false, 
           gestureEnabled: false,
      }}/>

    </Stack.Navigator>
  );
};