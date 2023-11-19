import { TouchableOpacity, View, Text } from "react-native";

import LogoutIcon from '../../../assets/icons/logout-icon.svg';

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const LeaveButton = ({onPress, overwriteStyles}) => {
    const { user, setCurrentEvent } = useContext(UserContext);
    
    const navigation = useNavigation();
    const defaultOnPress = () => {
        setCurrentEvent(null);
        navigation.navigate('HomeStack');
    }
    return (
        <TouchableOpacity 
            className="w-[100%] rounded-br-md h-[100%] flex flex-row items-center justify-center bg-red-600/[0.9] border-2 border-red-800/[0.9]  rounded-bl-md"
            onPress={onPress ? onPress : defaultOnPress}
            style={overwriteStyles}
        >
            <View className='flex-row items-center'>
                <LogoutIcon fill='white' />
                <Text style={{fontFamily: 'IBMPlexSans_700Bold'}} className="pl-2 text-xl text-white">Leave Event</Text>
            </View>
        </TouchableOpacity>
    )
}