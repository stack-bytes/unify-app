import { View } from "react-native"

import FireIcon from '../../assets/icons/fire-icon.svg';

export const TrendingIcon = () => {
    return (
        <View className='h-10 w-10 bg-[#F5C211]/[0.08] rounded-lg border-2 border-[#F5C211]/[0.79] items-center justify-center'>
            <FireIcon height='80%' width='80%' fill='#FFF500' />
        </View>
    )
}