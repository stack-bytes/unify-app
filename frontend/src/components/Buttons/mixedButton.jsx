import { View } from "react-native"
import { ShareButton } from "./shareButton"
import { LeaveButton } from "./leaveButton"
import { InfoButton } from "./infoButton"


export const MixedButton = ({Button1, Button2, navigation}) => {

    return (
        <View className='w-full h-full'>
            <View className='w-1/2 flex-row h-full items-center'>
                <InfoButton overwriteStyles={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                }} navigation={navigation}/>
                <LeaveButton overwriteStyles={{
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                }} navigation={navigation}/>
            </View>
        </View>
    )
}