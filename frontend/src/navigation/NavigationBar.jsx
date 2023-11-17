import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import MapScreen from "../screens/NavigationBar/MapScreen";

import Animated, {useSharedValue} from "react-native-reanimated";

import { View } from "react-native";

import FlagIcon from '../../assets/icons/flag-icon.svg';

const Tab = createBottomTabNavigator();

export const NavigationBar = () => {
    const mapIconSize = useSharedValue(50);

    return (
        <Tab.Navigator
            id="NavigationBar"
            initialRouteName="MapScreen"
            screenOptions={{
                showLabel: false,
                tabBarStyle: {
                    zIndex: 20,
                    position: 'absolute',
                    bottom: 30,
                    backgroundColor: 'rgba(14, 13, 13, 0.27)',
                    borderRadius: 16,
                    borderWidth: 2,
                    borderTopWidth: 2,
                    borderTopColor: 'rgba(14, 29, 53, 0.29)',
                    borderColor: 'rgba(14, 29, 53, 0.29)',
                    height: 80,
                    marginHorizontal: 25,
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
                    tabBarIcon: ({focused}) => (
                        <View className='pt-8'>
                            <Animated.View
                                style={{
                                    height: mapIconSize,
                                    width: mapIconSize
                                }}
                            >
                                <View className='w-[100px] h-[100px] bg-[#10E3A5]/[0.04] border-4 border-primary rounded-full items-center flex justify-center'>
                                    <FlagIcon width='50%' height='50%' fill='#10E3A5'/>
                                </View>
                            </Animated.View>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}