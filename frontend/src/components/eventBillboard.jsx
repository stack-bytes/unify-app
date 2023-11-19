import { View, Text, Image, TouchableOpacity } from 'react-native';
import LiveStreamingSvg from '../../assets/icons/streaming.svg';
import LogoutIcon from '../../assets/icons/logout-icon.svg';
import InfoIcon from '../../assets/icons/info-icon.svg';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const EventBillboard = ({navigation, setFocusedMarkerIndex, event, CustomButton}) => {
    const { user, setCurrentEvent } = useContext(UserContext); 

    const navigateToEventInfo = () => {
        /*
        ()=>navigation.getParent().navigate("EventStack", {
                                    screen: 'EventInfoScreen',
                                    params: {
                                        eventId: '6558d27239638819552dd1e4',
                                        event: {
                                            _id: user.currentEvent._id,
                                            name: user.currentEvent.name,
                                            location: user.currentEvent.location,
                                        }
                                    }
        */
        if(user.currentEvent.organizer === user.id){
            navigation.getParent().navigate("EventStack", {
                screen: 'EventDashboardScreen',
                params: {
                    event: user.currentEvent,
                }
            })
        } else {
            
            navigation.getParent().navigate("EventStack", {
                screen: 'EventInfoScreen',
                params: {
                    event: user.currentEvent,
                }
            })
        }
    }
    const joinEvent = () => {
        setCurrentEvent(event)
    }
    return (
        <View className="relative w-[90vw] h-[200px] border-2 border-[#121212]/[0.3]  rounded-md">

            <Text style={{fontFamily: 'SpaceGrotesk_700Bold'}} className="absolute text-text z-10 top-5 left-5 text-4xl">{event.name}</Text>
            <Text style={{fontFamily: 'SpaceGrotesk_500Medium'}} className="absolute text-primary z-10 top-[60px] left-6 text-xl">{event.location}</Text>

            <View className="absolute z-20 p-0.5 top-24 left-5 bg-secondary-trans rounded-md border-2 border-primary">
                <LiveStreamingSvg/>
            </View>

            {
                setFocusedMarkerIndex ? (
                    <TouchableOpacity 
                        className='absolute right-0 top-0 w-10 h-10 z-40'
                        onPress={() => setFocusedMarkerIndex(-1)}
                    >
                        <Text 
                            className='text-red-700 text-4xl text-center'
                            style={{fontFamily: 'SpaceGrotesk_700Bold'}}
                        >
                            x
                        </Text>
                    </TouchableOpacity>
                ) : null
            }


            <Image 
                className="w-full h-[75%] rounded-t-md" 
                source={{uri:  "https://imgs.search.brave.com/8kGu884s4LEEEGG8fdg0GUhcEAsIFbXE6bzj1HSdnB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmZvcnR1bmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExL0FQMjMz/MTI3MjYyNTU3MjIt/ZTE2OTk0NzczMTI3/NDguanBnP3c9MTQ0/MCZxPTc1"}}
            />


            <View className="flex flex-row h-[25%]">
                {
                    (
                    <>

                        {
                            CustomButton ? <CustomButton />
                            :
                            (user.currentEvent ? (
                                <TouchableOpacity 
                                    onPress = {navigateToEventInfo}
                                    className="w-full h-[100%] bg-[#F5C211]/[0.71] border-2 border-[#F5C211]/[1] rounded-br-md flex flex-row items-center justify-center"
                                >

                                    <View className='flex-row items-center'>

                                        <InfoIcon className='100%' fill='white'/>
                                        <Text 
                                            style={{fontFamily: 'IBMPlexSans_700Bold'}} 
                                            className="pl-2 text-xl text-white"
                                        >
                                            Info
                                        </Text>

                                    </View>

                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity 
                                    className="w-[100%] rounded-br-md h-[100%] flex flex-row items-center justify-center bg-[#19C391]/[0.9] border-2 border-primary/[0.1]  rounded-bl-md"
                                    onPress={joinEvent}
                                >
                                    <View className='flex-row items-center'>
                                        <LogoutIcon fill='white' />
                                        <Text style={{fontFamily: 'IBMPlexSans_700Bold'}} className="pl-2 text-xl text-white">Join Event</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </>
                )
            }
            </View>
        </View>
    )
}