import { createStackNavigator } from "@react-navigation/stack"
import MapScreen from "../../screens/HomeStack/MapScreen";
import { CameraScreen } from "../../screens/HomeStack/CameraScreen";

const Stack = createStackNavigator();

export const HomeStack = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="MapScreen"
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}
            detachInactiveScreens={true}
            id="HomeStack"
        >
            <Stack.Screen name="MapScreen" component={MapScreen} options={{
                headerShown: false, 
                gestureEnabled: false,
            }}/>

            <Stack.Screen name="CameraScreen" component={CameraScreen} options={{
                headerShown: false, 
                gestureEnabled: false,
            }}/>
        </Stack.Navigator>
    )
}