import { Image, Text, View } from "react-native";


import GradientBlue from '../../../assets/backgrounds/GradientBlue.png';

export default function ShopScreen({navigation}){
    return (
        <View className='w-full h-full'>
            <Image 
                className='w-full h-full absolute'
                source={GradientBlue}
            />
            <View className='w-full h-full items-center top-20'>
                <View className='flex items-center w-1/2 gap-y-2'>
                    <Text 
                        style={{fontFamily: 'SpaceGrotesk_500Medium'}}
                        className='text-text text-6xl'
                    >
                        Shop
                    </Text>
                    <View className='w-[50%] rounded-xl bg-[#16F1E4]/[0.22] border-2 border-primary justify-center items-center'>
                        <Text 
                            style={{fontFamily: 'SpaceGrotesk_500Medium'}}
                            className='text-text text-2xl'
                        >
                            1k p
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}