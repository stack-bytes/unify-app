import { View,Text } from "react-native";

import FlagIcon from '../../../assets/icons/flag-icon.svg';

export default function MapScreen({navigation}){
    return (
        <View className='w-full h-full'>
            <FlagIcon width='100%' height='80%' fill='black'/>
            <Text 
                className='text-4xl 
                text-primary'
                style={{fontFamily: 'IBMPlexSans_700Bold'}}
            >
                This is a nice app
            </Text>
        </View>
    )
}