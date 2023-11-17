import { View,Text } from "react-native";

import MapView from 'react-native-maps';
import FlagIcon from '../../../assets/icons/flag-icon.svg';

export default function MapScreen({navigation}){
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