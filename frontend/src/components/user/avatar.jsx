import { Image, View } from "react-native"

export const Avatar = ({userId, focused}) => {
    //give me a gravatar

    return (
        <View className='w-full h-full'>
            <Image 
                className={`w-full h-full rounded-full border-2 ${focused ? 'border-primary' : 'border-[#121212]/[0.29]'}`}
                source={{uri: `https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50`}}
            />
        </View>
    )
}