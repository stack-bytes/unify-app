import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import MapScreen from "../screens/NavigationBar/MapScreen";

const Tab = createBottomTabNavigator();

export const NavigationBar = () => {
    return (
        <Tab.Navigator
            id="NavigationBar"
            initialRouteName="MapScreen"
            screenOptions={{
                showLabel: false,
                tabBarStyle: {
                    zIndex: 20,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: '#212121',
                    borderRadius: 15,
                    height: 90,
                    borderTopWidth: 0,
                },
                headerTransparent: true,
                
            }}
        >
            <Tab.Screen 
                name="MapScreen" 
                component={MapScreen} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}