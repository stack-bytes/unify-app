import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts, SpaceGrotesk_700Bold, SpaceGrotesk_300Light, SpaceGrotesk_500Medium } from '@expo-google-fonts/space-grotesk';
import { useFonts as usePlexFonts, IBMPlexSans_700Bold, IBMPlexSans_400Regular, IBMPlexSans_300Light} from '@expo-google-fonts/ibm-plex-sans';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { MainStack } from './src/navigation/MainStack';
import { UserProvider } from './src/contexts/UserContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Root = createStackNavigator();

const App = () => {

    //Load fonts
    let [fontsLoaded, fontError] = useFonts({
      SpaceGrotesk_700Bold,
      SpaceGrotesk_500Medium,
      SpaceGrotesk_300Light,
      IBMPlexSans_700Bold,
      IBMPlexSans_400Regular,
      IBMPlexSans_300Light
    });
    if (!fontsLoaded && !fontError) {
      return null;
    }
    // mode="modal" headerMode="none"
  return (
    <UserProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Root.Navigator initialRouteName='MainStack' id='Root'>
              <Root.Screen name="MainStack" component={MainStack} options={{ headerShown: false }}/>
            </Root.Navigator>
          </NavigationContainer>
      </GestureHandlerRootView>
    </UserProvider>
  );
};

export default App;