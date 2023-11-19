import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";


import GradientGreen from '../../../assets/backgrounds/GradientGreen.png';
import { SearchBar } from "../../components/SearchBar";
import { CurrentEvent } from "../../components/CurrentEvent";

import ArrowIcon from "../../../assets/icons/arrow-icon.svg";
import { TrendingIcon } from "../../components/trendingIcon";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { DeleteModal } from "../../components/modals/deleteModal";
import { NotificationModal } from "../../components/modals/notificationModal";

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
    const [events, setEvents] = useState([{}]);

    const {user, toggleGhostMode} = useContext(UserContext);

    useEffect(() => {
        fetch(`http://172.20.10.8:4949/api/events/getEvents`)
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
    }, []);

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

                    <View className='h-[500px]'>
                        {
                            user.currentEvent && <CurrentEvent manyButttons="user" navigation={navigation} event={user.currentEvent} />
                        }

                        <View className='bg-[#0E0D0D]/[0.27] border-2 border-[#0E0D0D]/[0.29] w-[90vw] h-16 rounded-lg mb-2'>
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
                                data={events}
                                keyExtractor={(item) => item._id}
                                renderItem={({item}) => (
                                    <View className='bg-[#0E0D0D]/[0.27] border-2 border-[#0E0D0D]/[0.29] w-[90vw] h-16 rounded-lg justify-start flex-row pl-3 items-center mb-2'>
                                        <TrendingIcon />
                                        <View className='h-[70%] justify-center py-2'>
                                            <Text 
                                                style={{fontFamily: 'IBMPlexSans_700Bold'}}
                                                className='text-text text-2xl pl-2'
                                            >
                                                {item.name}
                                            </Text>
                                            <Text 
                                                style={{fontFamily: 'IBMPlexSans_400Regular'}}
                                                className='text-primary text-lg pl-2'
                                            >
                                                {item.location}
                                            </Text>
                                        </View>
                                    </View>
                                )}
                            />
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}