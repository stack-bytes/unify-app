import { Image, Text, View } from "react-native";

import LocationIcon from '../../../assets/icons/location-icon.svg';
import FlagIcon from '../../../assets/icons/flag-icon.svg';
import ArrowIcon from '../../../assets/icons/arrow-icon.svg';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PhotoScreen({navigation, route}){
    
    return (
        <View className='w-full h-full items-center justify-center bg-bg-dark'>
            <Image 
                className='w-full h-full rounded-lg absolute'
                source={{uri: route.params.photo}}
            />

        <View className='w-full h-40 absolute top-20 bg-transparent z-30 items-center justify-start p-5 gap-y-2'>
          <View className='h-8 w-full flex-row items-center justify-center gap-x-1'>
            <LocationIcon height='100%' fill='white'/>
            <Text
              style={{fontFamily: 'SpaceGrotesk_300Light'}}
              className='text-text text-xl'
            >
              {route.params.eventLocation}
            </Text>
          </View>

          <View className='h-18 w-full flex-row items-center justify-center gap-x-2'>
            <FlagIcon height='100%' fill='white'/>
            <Text
              style={{fontFamily: 'SpaceGrotesk_700Bold'}}
              className='text-text text-5xl'
            >
              {route.params.eventName}
            </Text>
          </View>
        </View>

        <View className='absolute bottom-16 left-0 h-24 w-24'>
            <TouchableOpacity 
                className='w-full h-full items-center justify-center'
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <ArrowIcon 
                    height='150%' width='40%' fill='white'
                    style = {{
                    transform: [
                        {rotate: '90deg'}
                    ]
                    }}
                />
            </TouchableOpacity>
        </View>
            <View className='absolute bottom-20 '>
                <View className='flex-row items-center gap-x-2'>
                    <Image 
                        source = {{uri: route.params.photo}}
                        className='rounded-full w-16 h-16 border-2 border-white'
                    />
                    <Text 
                        className='text-text text-2xl'
                        style={{
                            fontFamily: 'IBMPlexSans_400Regular'
                        }}
                    >
                        davidphex
                    </Text>
                </View>
            </View>
        </View>
    )
}