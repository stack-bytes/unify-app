import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';



import { FriendsScreen } from '../../screens/NavigationBar/FriendsScreen';
import { GroupsScreen } from '../../screens/FriendsStack/GroupsScreen';

const Stack = createStackNavigator();

export const FriendsStack = ({navigation}) => {
    return(
    <Stack.Navigator 
      initialRouteName='FriendsScreen'
      screenOptions={{
        detachPreviousScreen: false,
      }}
      id='FriendsStack'
      >

      <Stack.Screen name="FriendsScreen" component={FriendsScreen} options={{
           headerShown: false, 
           gestureEnabled: false,
      }}/>

      <Stack.Screen name="GroupsScreen" component={GroupsScreen} options={{
        headerShown: false, 
        gestureEnabled: false,
      }}/>

    </Stack.Navigator>
  );
}