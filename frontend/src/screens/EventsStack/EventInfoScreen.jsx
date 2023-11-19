import {View, Image, TouchableOpacity, Text, ImageBackground, FlatList} from 'react-native';
import GradientGreen from '../../../assets/backgrounds/GradientGreen.png';

import { CurrentEvent } from '../../components/CurrentEvent';
import { UserContext } from '../../contexts/UserContext';

import {SERVER_IP} from '../../../settings.json';
import { useContext, useState, useEffect } from 'react';


export const EventInfoScreen = ({navigation, route}) => {
    const data = [
        { id: '1', text: 'davidphex', photo: 'https://res.cloudinary.com/dvbzt3rq8/image/upload/f_auto,q_auto/glqdszt99rlzgwkdwo93' },
        { id: '2', text: 'Item 2' },
        { id: '3', text: 'Item 3' },
        { id: '4', text: 'Item 4' },
        { id: '5', text: 'Item 5' },
        { id: '6', text: 'Item 6' },
        { id: '7', text: 'Item 7' },
        { id: '8', text: 'Item 8' },
        { id: '9', text: 'Item 9' },    
    ];

    const [eventData, setEventData] = useState(null);
    const [photos, setPhotos] = useState(null);
    const {user} = useContext(UserContext);

    useEffect(() => {
        fetch(`http://172.20.10.8:4949/api/events/getEventById/6558d27239638819552dd1e4`)
            .then(res => res.json())
            .then(data => {
                setEventData(data);
            })
    },[]);

    useEffect(() => {
        fetch(`http://172.20.10.8:4949/api/photos/getPhotosFromEvent/6558d27239638819552dd1e4`)
            .then(res => res.json())
            .then(data => {
                setPhotos(data);
            })
    })


    return(
        <>
            <View className='w-full h-full flex flex-col items-center justify-start bg-bg-dark'>
                <ImageBackground 
                    className='w-full h-full absolute'
                    source={GradientGreen}
                />
                <View className="mt-12">
                    <CurrentEvent manyButttons='share' navigation={navigation} ></CurrentEvent>
                </View>

                <Text className='text-4xl text-text mb-[-20]'>People</Text>

                <View className='h-[400px]'>
                    <FlatList
                    className='mt-6'
                    data={data}
                    vertical={true}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View className='w-44 h-44 rounded-lg bg-bg-dark-trans border m-2'>
                            <TouchableOpacity 
                                className='w-full h-full flex flex-col items-center justify-center'
                                onPress={() => {
                                    navigation.getParent('MainStack').navigate('MainStack', {
                                        screen: 'PhotoScreen',
                                        params: {
                                            userId: item.id,
                                            username: item.text,
                                            eventId: route.params.eventId,
                                            photo: item.photo,
                                            eventLocation: 'Universitate',
                                            eventName: 'Hackathon',
                                        }
                                    })
                                }}
                            >
                                <Image 
                                    style={{
                                        width: '50%',
                                        height: '50%',
                                        borderRadius: 60,
                                        borderWidth: 3,
                                        borderColor: item.photo ? '#10E3A5' : 'transparent',
                                    }}
                                    source={{uri: "https://imgs.search.brave.com/8kGu884s4LEEEGG8fdg0GUhcEAsIFbXE6bzj1HSdnB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmZvcnR1bmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExL0FQMjMz/MTI3MjYyNTU3MjIt/ZTE2OTk0NzczMTI3/NDguanBnP3c9MTQ0/MCZxPTc1"}}
                                />
                                <Text className='text-xl text-text ' style={{fontFamily: 'SpaceGrotesk_500Medium'}}>
                                    {item.text}
                                </Text>
                                <Text className='text-md text-gray-500 ' style={{fontFamily: 'SpaceGrotesk_500Medium'}}>
                                    {item.text}
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