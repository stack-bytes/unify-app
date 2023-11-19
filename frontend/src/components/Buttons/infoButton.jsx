import { TouchableOpacity, View, Text } from "react-native";

import InfoIcon from '../../../assets/icons/info-icon.svg';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import {useNavigation} from '@react-navigation/native';

export const InfoButton = ({onPress, overwriteStyles}) => {
    const { user } = useContext(UserContext);

    const navigation = useNavigation();

    const defaultOnPress = () => {
        if(user.currentEvent.organizer === user.id){
            navigation.getParent().navigate("EventStack", {
                screen: 'EventDashboardScreen',
                params: {
                    event: user.currentEvent,
                }
            })
        } else {
            navigation.getParent().navigate("EventStack", {
                screen: 'EventInfoScreen',
                params: {
                    event: user.currentEvent,
                }
            })
        }
    }
    return (
        <TouchableOpacity 
            className="w-[100%] rounded-br-md h-[100%] flex flex-row items-center justify-center bg-[#F5C211]/[0.9] border-2 border-[#F5C211]/[0.7]  rounded-bl-md"
            onPress={onPress ? onPress : defaultOnPress}
            style={overwriteStyles}
        >
            <View className='flex-row items-center'>
                <InfoIcon fill='white' />
                <Text style={{fontFamily: 'IBMPlexSans_700Bold'}} className="pl-2 text-xl text-white">Info</Text>
            </View>
        </TouchableOpacity>
    )
}