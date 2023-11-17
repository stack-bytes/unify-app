import { ImageBackground, View ,Text,Image } from "react-native";


import GradientBlue from '../../../assets/backgrounds/GradientBlue.png'



export default function ProfileScreen({navigation}){
    return (
        <View className='w-full h-full'>
            <ImageBackground source={GradientBlue} className='w-full h-full flex flex-col items-center justify-start'>
            <View className='w-full h-full p-10 flex flex-col items-center justify-start'>
                    <View className="w-72 h-72 bg-bg-light-trans rounded-full mt-20">
                        <Image className='w-[90%] h-[90%]'></Image>
                    </View>
            </View>
            </ImageBackground>
        </View>
    )
}