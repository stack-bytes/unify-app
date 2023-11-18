import { Text, View } from "react-native"
import { GenericButton } from "../Buttons/genericButton"

import TrashIcon from '../../../assets/icons/trash-icon.svg';

export const DeleteModal = () => {
    return (
        <View className='w-full h-full z-30 justify-center items-center'>
            <View className='w-[90%] h-1/3 justify-start bg-[#0E0D0D]/[0.27] border-2 border-[#0E0D0D]/[0.29] rounded-lg items-center'>
                <View className='w-full h-1/2 p-5 gap-y-6'>
                    <Text 
                        className='text-[#FF5D5D] text-2xl text-center'
                        style={{
                            fontFamily: 'IBMPlexSans_700Bold',
                        }}
                    >
                        Are you sure you want to delete this account?
                    </Text>
                    <Text 
                        className='text-text text-2xl text-center'
                        style={{
                            fontFamily: 'IBMPlexSans_700Bold',
                        }}
                    >
                        You will lose all your data
                    </Text>
                </View>

                <View className='justify-center items-center w-full'>
                    <GenericButton 
                        buttonText='Cancel'
                        backgroundColor='rgba(14,13,13,0.29)'
                        borderColor='rgba(14,13,13,0.29)'
                        
                    />
                    <GenericButton 
                        buttonText='Delete Account'
                        backgroundColor='rgba(14,13,13,0.27)'
                        borderColor='rgba(14,13,13,0.29)'
                        SvgIcon={TrashIcon}
                    />
                </View>
            </View>
        </View>
    )
}