import { View,Text } from "react-native";


export default function ProfileScreen({navigation}){
    return (
        <View className='w-full h-full'>
            <MapView
                className='w-full h-full absolute'
            />
            <Text>
                test
            </Text>
        </View>
    )
}