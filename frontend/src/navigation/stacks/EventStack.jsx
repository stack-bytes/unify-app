import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';




import EventsScreen from '../../screens/NavigationBar/EventsScreen';
import { EventInfoScreen } from '../../screens/EventsStack/EventInfoScreen';
import { CameraScreen } from '../../screens/EventsStack/CameraScreen';


const Stack = createStackNavigator();

export const EventStack = ({navigation}) => {
    return(
    <Stack.Navigator 
      initialRouteName='EventsScreen'
      screenOptions={{
        detachPreviousScreen: false,
      }}
      id='MainStack'
      >

      <Stack.Screen name="CameraScreen" component={CameraScreen} options={{
           headerShown: false, 
           gestureEnabled: false,
      }}/>

      <Stack.Screen name="EventInfoScreen" component={GroupsScreen} options={{
        headerShown: false, 
        gestureEnabled: false,
      }}/>

    </Stack.Navigator>
  );
}