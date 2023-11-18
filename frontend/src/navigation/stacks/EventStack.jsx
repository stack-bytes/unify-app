import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';




import EventsScreen from '../../screens/NavigationBar/EventsScreen';
import { EventInfoScreen } from '../../screens/EventsStack/EventInfoScreen';
import { CameraScreen } from '../../screens/HomeStack/CameraScreen';
import { EventDashboardScreen } from '../../screens/EventsStack/EventDashboardScreen';


const Stack = createStackNavigator();

export const EventStack = ({navigation}) => {
    return(
    <Stack.Navigator 
      initialRouteName='EventsScreen'
      screenOptions={{
        detachPreviousScreen: false,
      }}
      id='EventStack'
      >
      <Stack.Screen name="EventsScreen" component={EventsScreen} options={{
           headerShown: false, 
           gestureEnabled: false,
      }}/>

      <Stack.Screen name="EventDashboardScreen" component={EventDashboardScreen} options={{
           headerShown: false, 
           gestureEnabled: false,
      }}/>

      <Stack.Screen name="EventInfoScreen" component={EventInfoScreen} options={{
        headerShown: false, 
        gestureEnabled: false,
      }}/>

    </Stack.Navigator>
  );
}