import { Text, View } from "react-native"

export const NotificationModal = () => {
    return (
        <View className='w-full h-full z-30 justify-center items-center'>
            <View className='w-[90%] h-52    justify-center bg-[#0E0D0D]/[0.27] border-2 border-[#0E0D0D]/[0.29] rounded-lg items-center'>
                <View className='w-full h-full p-5 gap-y-6'>
                    <Text 
                        className='text-[#FFED47] text-2xl text-center'
                        style={{
                            fontFamily: 'IBMPlexSans_700Bold',
                        }}
                    >
                        We will mail you a link with all your data
                    </Text>
                    <Text 
                        className='text-text text-2xl text-center'
                        style={{
                            fontFamily: 'IBMPlexSans_700Bold',
                        }}
                    >
                        It might take a couple of hours
                    </Text>
                </View>
            </View>
        </View>
    )
}