import {View, Image, TouchableOpacity, Text} from 'react-native';
import GradientGreen from '../../../assets/backgrounds/GradientGreen.png';

export const FriendsScreen = () => {
    return(
         <View className='w-full h-full bg-bg-dark'>
            <ImageBackground 
                className='w-full h-full absolute'
                source={GradientGreen}
            />
            <View className='w-full h-full items-center top-20'>
                <View className='flex items-center w-1/2 gap-y-2'>
                    <Text 
                        style={{fontFamily: 'SpaceGrotesk_500Medium'}}
                        className='text-text text-6xl'
                    >
                        Events
                    </Text>
                    <SearchBar></SearchBar>
                    <CurrentEvent></CurrentEvent>
                </View>
            </View>
        </View>
    );
}