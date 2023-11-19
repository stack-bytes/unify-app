import { TouchableOpacity, View, Text } from "react-native";

import LogoutIcon from '../../../assets/icons/logout-icon.svg';

export const ShareButton = ({onPress}) => {
    return (
        <TouchableOpacity 
            className="w-[100%] rounded-br-md h-[100%] flex flex-row items-center justify-center bg-[#19C391]/[0.9] border-2 border-primary/[0.1]  rounded-bl-md"
            onPress={onPress}
        >
            <View className='flex-row items-center'>
                <LogoutIcon fill='white' />
                <Text style={{fontFamily: 'IBMPlexSans_700Bold'}} className="pl-2 text-xl text-white">Share Event</Text>
            </View>
        </TouchableOpacity>
    )
}