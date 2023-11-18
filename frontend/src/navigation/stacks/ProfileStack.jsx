import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import UserProfileScreen from '../../screens/NavigationBar/UserProfileScreen';
import { UserSettingsScreen } from '../../screens/ProfileStack/UserSettingsScreen';
import  PronounsScreen  from '../../screens/ProfileStack/PronounsScreen';

const Stack = createStackNavigator();

export const ProfileStack = ({navigation}) => {
    return(
    <Stack.Navigator 
      initialRouteName='UserProfileScreen'
      screenOptions={{
        detachPreviousScreen: false,
        
      }}
      id='ProfileStack'
      >

      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} options={{
           headerShown: false, 
           gestureEnabled: false,
      }}/>

      <Stack.Screen name="PronounsScreen" component={PronounsScreen} options={{
        headerShown: false, 
        gestureEnabled: false,
      }}/>

      <Stack.Screen name="UserSettingsScreen" component={UserSettingsScreen} options={{
        headerShown: false, 
        gestureEnabled: false,
      }}/>

      

    </Stack.Navigator>
  );
}