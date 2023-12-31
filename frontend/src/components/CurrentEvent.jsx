import {View, Image, TouchableOpacity, Text} from 'react-native';
import LiveStreamingSvg from '../../assets/icons/streaming.svg';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

import LogoutIcon from '../../assets/icons/logout-icon.svg';
import InfoIcon from '../../assets/icons/info-icon.svg';
import {SERVER_IP} from '../../settings.json';

export const CurrentEvent = ({navigation, manyButttons, joinButton, event }) => {

    //buttons = 'join' 

    const {user, setCurrentEvent} = useContext(UserContext);

    const [eventData, setEventData] = useState(null);
    
    useEffect(() => {
        fetch(`${SERVER_IP}:4949/api/events/getEventById/${event._id}`)
            .then(res => res.json())
            .then(result => {
                setEventData(result.data);
            })
    },[])
    const onExitPress = () => {
        setCurrentEvent(null);
    }

    const onJoinPress = () => {

        setCurrentEvent(event);
        console.log(user.currentEvent);
        navigation.getParent().navigate('EventStack', {
            screen: 'EventsScreen'
        })
    }

    
    return(
            <View className="relative w-[90vw] h-[300px]  rounded-md">
                <Text style={{fontFamily: 'SpaceGrotesk_700Bold'}} className="absolute text-text z-10 top-5 left-5 text-4xl">{event?.name}</Text>
                <Text style={{fontFamily: 'SpaceGrotesk_500Medium'}} className="absolute text-primary z-10 top-[60px] left-6 text-xl">{event?.location}</Text>
                <View className="absolute z-20 p-0.5 top-24 left-5 bg-secondary-trans rounded-md border-2 border-primary">
                    <LiveStreamingSvg/>
                </View>
                <Image className="w-full h-[70%] opacity-70 rounded-t-md" source={{uri:  "https://imgs.search.brave.com/8kGu884s4LEEEGG8fdg0GUhcEAsIFbXE6bzj1HSdnB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmZvcnR1bmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExL0FQMjMz/MTI3MjYyNTU3MjIt/ZTE2OTk0NzczMTI3/NDguanBnP3c9MTQ0/MCZxPTc1"}}/>
                <View className="flex flex-row h-[25%]">
                    {
                    manyButttons == 'user' ? 
                    (
                    <>
                    <TouchableOpacity 
                        className="w-[50%] h-[100%] flex flex-row items-center justify-center bg-[#BF4040]/[0.71] border-2 border-[#C94646]/[0.93]  rounded-bl-md"
                        onPress={onExitPress}
                    >
                        <View className='flex-row items-center'>
                            <LogoutIcon fill='white' />
                            <Text style={{fontFamily: 'IBMPlexSans_700Bold'}} className="pl-2 text-xl text-white">Leave Event</Text>
                        </View>
                    </TouchableOpacity>

                    
                    <TouchableOpacity onPress = {eventData && eventData.organizer == user.id ? ()=>navigation.navigate("EventInfoScreen", {
                        event: {
                            _id: user.currentEvent._id,
                            name: user.currentEvent.name,
                            location: user.currentEvent.location,
                        }
                    }): 
                        () => navigation.navigate('EventDashboardScreen', {
                            event: {
                                _id: user.currentEvent._id,
                                name: user.currentEvent.name,
                                location: user.currentEvent.location,
                            }
                        })
                    } className="w-[50%] h-[100%] bg-[#F5C211]/[0.71] border-2 border-[#F5C211]/[1] rounded-br-md flex flex-row items-center justify-center">
                        <View className='flex-row items-center'>
                            <InfoIcon className='100%' fill='white'/>
                            <Text style={{fontFamily: 'IBMPlexSans_700Bold'}} className="pl-2 text-xl text-white">Info</Text>
                        </View>
                    </TouchableOpacity>
                    </>
                    ) : manyButttons == 'share' ? (
                        <>
                            <TouchableOpacity 
                                className="w-[100%] rounded-br-md h-[100%] flex flex-row items-center justify-center bg-primary-trans border-2 border-primary  rounded-bl-md"
                                onPress={onExitPress}
                            >
                                <View className='flex-row items-center'>
                                    <LogoutIcon fill='white' />
                                    <Text style={{fontFamily: 'IBMPlexSans_700Bold'}} className="pl-2 text-xl text-white">Share Event</Text>
                                </View>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            <TouchableOpacity 
                                    className="w-[100%] rounded-br-md h-[100%] flex flex-row items-center justify-center bg-primary-trans border-2 border-primary  rounded-bl-md"
                                    onPress={onJoinPress}
                                >
                                    <View className='flex-row items-center'>
                                        <LogoutIcon fill='white' />
                                        <Text style={{fontFamily: 'IBMPlexSans_700Bold'}} className="pl-2 text-xl text-white">Join Event</Text>
                                    </View>
                                </TouchableOpacity>
                        </>
                    )
                }
                </View>
            </View>
    );
} 