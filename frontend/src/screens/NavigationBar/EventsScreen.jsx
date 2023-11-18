import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";


import GradientGreen from '../../../assets/backgrounds/GradientGreen.png';
import { SearchBar } from "../../components/SearchBar";
import { CurrentEvent } from "../../components/CurrentEvent";

import ArrowIcon from "../../../assets/icons/arrow-icon.svg";
import { TrendingIcon } from "../../components/trendingIcon";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const data = [
    {
        id: 1,
        title: 'House Party',
        description: 'This is the first event',
        background: 'https://picsum.photos/200/300',
        date: '2021-10-10',
        time: '10:00',
        location: '1234 Street',
        category: 'Music',
        trending: true,
    },
    {
        id: 2,
        title: 'House Party',
        description: 'This is the first event',
        background: 'https://picsum.photos/200/300',
        date: '2021-10-10',
        time: '10:00',
        location: '1234 Street',
        category: 'Music',
        trending: true,
    },
    {
        id: 3,
        title: 'House Party',
        description: 'This is the first event',
        background: 'https://picsum.photos/200/300',
        date: '2021-10-10',
        time: '10:00',
        location: '1234 Street',
        category: 'Music',
        trending: true,
    },
]

export default function EventsScreen({navigation}){
    const [listIsOpen, setListIsOpen] = useState(false);

    const {user, toggleGhostMode} = useContext(UserContext);
    return (
        <View className='w-full h-full bg-bg-dark'>
            <ImageBackground 
                className='w-full h-full absolute'
                source={GradientGreen}
            />
            <View className='w-full h-full items-center top-20'>
                <View className='flex items-center w-[100%] gap-y-2'>
                    <Text 
                        style={{fontFamily: 'SpaceGrotesk_500Medium'}}
                        className='text-text text-6xl'
                    >
                        Events
                    </Text>
                    <SearchBar></SearchBar>
                    {
                        user.currentEvent && <CurrentEvent navigation={navigation} />
                    }

                    <View className='bg-[#0E0D0D]/[0.27] border-2 border-[#0E0D0D]/[0.29] w-[90vw] h-16 rounded-lg'>
                        <TouchableOpacity 
                            className='w-full h-full absolute z-10'
                            onPress={() => setListIsOpen(!listIsOpen)}
                        />
                        <View className='ml-4 h-full justify-start flex-row items-center '>
                            <Text 
                                style={{fontFamily: 'SpaceGrotesk_500Medium'}}
                                className='text-text text-2xl pr-2'
                            >
                                In your area
                            </Text>
                            <ArrowIcon height='100%' fill='white'/>
                        </View>
                    </View>

                    {
                        listIsOpen &&
                        <FlatList 
                            className='h-36'
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => (
                                <View className='bg-[#0E0D0D]/[0.27] border-2 border-[#0E0D0D]/[0.29] w-[90vw] h-16 rounded-lg justify-start flex-row pl-3 items-center mb-2'>
                                    <TrendingIcon />
                                    <View className='h-[70%] justify-center py-2'>
                                        <Text 
                                            style={{fontFamily: 'IBMPlexSans_700Bold'}}
                                            className='text-text text-2xl pl-2'
                                        >
                                            {item.title}
                                        </Text>
                                        <Text 
                                            style={{fontFamily: 'IBMPlexSans_400Regular'}}
                                            className='text-primary text-lg pl-2'
                                        >
                                            {item.description}
                                        </Text>
                                    </View>
                                </View>
                            )}
                        />
                    }
                </View>
            </View>
        </View>
    )
}