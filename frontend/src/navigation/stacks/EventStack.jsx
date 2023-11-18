import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';




import EventsScreen from '../../screens/NavigationBar/EventsScreen';
import { EventInfoScreen } from '../../screens/EventsStack/EventInfoScreen';
import { CameraScreen } from '../../screens/EventsStack/CameraScreen';


const Stack = createStackNavigator();

export const EventStack = ({navigation}) => {
    return(
    <Stack.Navigator 
      initialRouteName='CameraScreen'
      screenOptions={{
        detachPreviousScreen: false,
      }}
      id='MainStack'
      >

      <Stack.Screen name="EventsScreen" component={EventsScreen} options={{
            headerShown: false, 
            gestureEnabled: false,
      }}/>

      <Stack.Screen name="CameraScreen" component={CameraScreen} options={{
           headerShown: false, 
           gestureEnabled: false,
      }}/>

      <Stack.Screen name="EventInfoScreen" component={CameraScreen} options={{
        headerShown: false, 
        gestureEnabled: false,
      }}/>

    </Stack.Navigator>
  );
}