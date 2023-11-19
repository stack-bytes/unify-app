import { useContext, useState } from "react";
import { Text, View, Image, TextInput, FlatList, TouchableOpacity, Keyboard} from "react-native";
import { GenericButton } from "../../components/Buttons/genericButton";
 
import GradientGreen from "../../../assets/backgrounds/GradientGreen.png";

import flagIcon from "../../../assets/icons/flag-icon.svg";	
import ArrowIcon from "../../../assets/icons/arrow-icon.svg";
import { UserContext } from "../../contexts/UserContext";


export const CreateEventScreen = ({navigation, route}) => {
    const [eventName, setEventName] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventType, setEventType] = useState('');

    const { user, setCurrentEvent } = useContext(UserContext);

    const createEvent = async () => {
        fetch(`http://172.20.10.8:4949/api/events/createEvent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: user.id,
                name: eventName,
                location: eventLocation,
                type: eventType,
                backgroundPic: 'https://res.cloudinary.com/dvbzt3rq8/image/upload/f_auto,q_auto/glqdszt99rlzgwkdwo93',
                coords: user.location.coords,
            })
        })
            .then(res => res.json())
            .then(result => {
                navigation.getParent().navigate('HomeStack');
                setCurrentEvent(result);
            })
    }
    return (
        <View className='w-full h-full'>
            <View className = 'flex-1 items-center w-full'>
                <Image 
                source={GradientGreen}
                className = 'bg-bg-dark w-full h-full absolute'/>

                <Text className="text-4xl text-text mt-20">Create Event</Text>

                <TouchableOpacity 
                    className='w-16 h-16 absolute left-4 top-12 '
                    onPress={() => navigation.getParent().navigate('HomeStack')}
                >
                    <ArrowIcon 
                        height='150%' width='50%' fill='white'
                        style={{
                            transform : [
                                {rotate: '90deg'}
                            ]
                        }}
                    />
                </TouchableOpacity>
                <View className = 'flex gap-y-4 h-[50px] w-[80%] mt-12'>
                    <Text className = 'text-[#10E3A5] text-[20px]'>Event name:</Text>
                    <View className = 'align-center justify-center h-full w-full border-[#D3D3D3]/[0.5] border-[1px] rounded-lg'>
                        <TextInput
                            placeholder = "event name"
                            placeholderTextColor = "rgba(255, 255, 255, 0.3)"
                            style = {{ 
                                marginLeft: 10,
                                fontSize: 20,
                            }}
                            onChangeText = {newText => setEventName(newText)}
                            defaultValue = {eventName}
                            autoCapitalize="none"
                            returnKeyType = "done"
                            className = 'text-white'
                        />
                    </View> 

                    <Text className = 'text-[#10E3A5] text-[20px]'>Event location:</Text>
                    <View className = 'align-center justify-center h-full w-full border-[#D3D3D3]/[0.5] border-[1px] rounded-lg'>
                        <TextInput
                            placeholder = "event name"
                            placeholderTextColor = "rgba(255, 255, 255, 0.3)"
                            style = {{ 
                                marginLeft: 10,
                                fontSize: 20,
                            }}
                            onChangeText = {newText => setEventLocation(newText)}
                            defaultValue = {eventLocation}
                            autoCapitalize="none"
                            returnKeyType = "done"
                            className = 'text-white'
                        />
                    </View>

                    <Text className = 'text-[#10E3A5] text-[20px]'>Event type:</Text>
                    <View className = 'align-center justify-center h-full w-full border-[#D3D3D3]/[0.5] border-[1px] rounded-lg'>
                        <TextInput
                            placeholder = "event type"
                            placeholderTextColor = "rgba(255, 255, 255, 0.3)"
                            style = {{ 
                                marginLeft: 10,
                                fontSize: 20,
                            }}
                            onChangeText = {newText => setEventType(newText)}
                            defaultValue = {eventType}
                            autoCapitalize="none"
                            returnKeyType = "done"
                            className = 'text-white'
                        />
                    </View>
                        
                    <View className = 'w-[117.5%] pt-16 h-7'>
                        <GenericButton
                            buttonText = 'Create Event'
                            backgroundColor='rgba(22, 241, 228, 0.35)'
                            textColor={'#16F1E4'}
                            borderColor = {'#16F1E4'}
                            onPress={createEvent}
                            
                    />
                    </View>
                    
                </View>

                
                
                
            </View>
        </View>
    );
}