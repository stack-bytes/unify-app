import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import MapScreen from "../screens/NavigationBar/MapScreen";
import ProfileScreen from "../screens/NavigationBar/UserProfileScreen";

import Animated, { runOnJS, useSharedValue } from "react-native-reanimated";

import { View } from "react-native";

import FlagIcon from '../../assets/icons/flag-icon.svg';
import ShopIcon from '../../assets/icons/shop-icon.svg';
import LocationIcon from '../../assets/icons/location-icon.svg';
import PeopleIcon from '../../assets/icons/people-icon.svg';

import { Avatar } from "../components/user/avatar";
import ShopScreen from "../screens/NavigationBar/ShopScreen";
import EventsScreen from "../screens/NavigationBar/EventsScreen";

import { FriendsStack } from "./stacks/FriendsStack";
import { EventStack } from "./stacks/EventStack";
import { ProfileStack } from "./stacks/ProfileStack";


const Tab = createBottomTabNavigator();

export const NavigationBar = ({navigation}) => {
    const mapIconSize = useSharedValue(70);
    const profileIconSize = useSharedValue(80);

    return (
        <Tab.Navigator
            id="NavigationBar"
            initialRouteName="ProfileScreen"
            screenOptions={{
                showLabel: false,
                tabBarStyle: {
                    zIndex: 20,
                    position: 'absolute',
                    bottom: 35,
                    backgroundColor: 'rgba(14, 13, 13, 0.77)',
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
                name="ProfileScreen" 
                component={ProfileStack} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View className='pt-8'>
                            <Animated.View
                                style={{
                                    height: 40,
                                    width: 40
                                }}
                            >
                                <Avatar focused={focused} />
                            </Animated.View>
                        </View>
                    ),
                }}
            /> 
            <Tab.Screen 
                name="ShopScreen" 
                component={ShopScreen} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View className='pt-8 pr-6'>
                            <Animated.View
                                style={{
                                    height: 35,
                                    width: 35
                                }}
                            >
                                <ShopIcon width='100%' height='100%' fill={focused ? '#10E3A5' : '#FFF'}/>
                            </Animated.View>
                        </View>
                    ),
                }}
            />
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
                                    height: 90,
                                    width: 90
                                }}
                            >
                                <View className='w-full h-full bg-[#10E3A5]/[0.04] border-4 border-primary rounded-full items-center flex justify-center'>
                                    <FlagIcon width='50%' height='50%' fill='#10E3A5'/>
                                </View>
                            </Animated.View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name="EventsStack" 
                component={EventStack} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View className='pt-8 pl-6'>
                            <Animated.View
                                style={{
                                    height: 35,
                                    width: 35
                                }}
                            >
                                <LocationIcon width='100%' height='100%' fill={focused ? '#10E3A5' : '#FFF'}/>
                            </Animated.View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name="FriendsScreen" 
                component={FriendsStack} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View className='pt-8'>
                            <Animated.View
                                style={{
                                    height: 35,
                                    width: 35
                                }}
                            >
                                <PeopleIcon width='100%' height='100%' fill={focused ? '#10E3A5' : '#FFF'}/>
                            </Animated.View>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}