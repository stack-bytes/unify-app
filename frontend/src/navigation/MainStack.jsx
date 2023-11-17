import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationBar } from './NavigationBar';

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
           gestureEnabled: false,
      }}/>

    </Stack.Navigator>
  );
};