import {View, Image, TouchableOpacity, Text, ImageBackground, FlatList} from 'react-native';
import GradientGreen from '../../../assets/backgrounds/GradientGreen.png';

import StarIcon from '../../../assets/icons/star-icon.svg';

import { CurrentEvent } from '../../components/CurrentEvent';
import { UserContext } from '../../contexts/UserContext';

import {SERVER_IP} from '../../../settings.json';
import { useContext, useState, useEffect } from 'react';
import { getEventById } from '../../utils/events';
import { EventBillboard } from '../../components/eventBillboard';
import { ShareButton } from '../../components/Buttons/shareButton';

export const EventInfoScreen = ({navigation, route}) => {

    const [membersData, setMembersData] = useState([]);
    const [eventData, setEventData] = useState(null);

    const { user } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            fetch(`${SERVER_IP}:4949/api/photos/getPhotosFromUsers?eventId=${route.params.event._id}`)
            .then(res => res.json())
            .then(result => {
                console.log(result.data);
                setMembersData(result.data);
                setEventData(getEventById(route.params.event._id));
            });
        })();
    },[]);


    return(
        <>
            <View className='w-full h-full flex flex-col items-center justify-start bg-bg-dark'>

                <ImageBackground 
                    className='w-full h-full absolute'
                    source={GradientGreen}
                />

                <View className='w-full h-10 justify-center items-center mt-16'>
                    <View>
                        <Text
                            className='text-text text-4xl'
                            style={{fontFamily: 'IBMPlexSans_700Bold'}}
                        >
                            Event Info
                        </Text>
                    </View>
                </View>


                <View className='mt-4'>
                    <EventBillboard 
                        navigation={navigation}
                        event={route.params.event}
                        CustomButton={ShareButton}
                    />
                </View>

                <View className='h-10 w-full items-center mt-6'>
                    <Text className='text-4xl text-text'>People</Text>
                </View>

                <View className='h-[400px]'>
                    <FlatList
                    className='mt-2'
                    data={membersData}
                    vertical={true}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View className='w-44 h-44 rounded-lg bg-bg-dark-trans border m-2'>
                            <TouchableOpacity 
                                className='w-full h-full flex flex-col items-center justify-center'
                                onPress={item.photo ? () => {
                                    navigation.getParent('MainStack').navigate('MainStack', {
                                        screen: 'PhotoScreen',
                                        params: {
                                            userId: item.id,
                                            username: item.text,
                                            eventId: route.params.eventId,
                                            photo: item.photo,
                                            eventLocation: eventData.location,
                                            eventName: eventData.name,
                                        }
                                    })
                                }: null}
                            >
                                <View className='w-1/2 h-1/2 justify-center items-center'>
                                    <Image 
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 60,
                                            borderWidth: 3,
                                            borderColor: item.photo ? '#10E3A5' : 'transparent',
                                        }}
                                        source={{uri: "https://imgs.search.brave.com/8kGu884s4LEEEGG8fdg0GUhcEAsIFbXE6bzj1HSdnB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmZvcnR1bmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExL0FQMjMz/MTI3MjYyNTU3MjIt/ZTE2OTk0NzczMTI3/NDguanBnP3c9MTQ0/MCZxPTc1"}}
                                    />
                                    {
                                        eventData && item.id === eventData.organizer &&
                                        <StarIcon 
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                            }} 
                                            height='35%' width='35%' fill='#FFE236'
                                        />
                                    }
                                </View>

                                <Text className='text-xl text-text ' style={{fontFamily: 'SpaceGrotesk_500Medium'}}>
                                    {item.username}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    contentContainerStyle={"flex-column"}
                    />
                </View>
                
            </View>
        </>
    );
}