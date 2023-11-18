import { useState } from "react";
import { Text, View, Image, TextInput, FlatList, TouchableOpacity, Keyboard} from "react-native";
import { GenericButton } from "../../components/Buttons/genericButton";
 
import GradientGreen from "../../../assets/backgrounds/GradientGreen.png";

import flagIcon from "../../../assets/icons/flag-icon.svg";	


export const CreateEventScreen = ({navigation, route}) => {
    const [eventName, setEventName] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventType, setEventType] = useState('');

    return (
        <View className='w-full h-full'>
            <View className = 'flex-1 items-center w-full'>
            <Image 
            source={GradientGreen}
            className = 'bg-bg-dark w-full h-full absolute'/>

            <Text className="text-4xl text-text mt-20">Create Event</Text>
            

            <TextInput 
                        placeholder = "email"
                        placeholderTextColor = "#10E3A5"
                        style={{fontFamily: 'SpaceGrotesk_500Medium'	}}
                        onChangeText={newText => setEventName(newText)}
                        defaultValue = {eventName}
                        autoCapitalize="none"
                        className = 'pl-2 w-full h-20 text-[20px] text-white font-bold'	
                        returnKeyType="done"       

                    />

            <TextInput 
                placeholder = "event name"
                onChangeText = {(text) => setEventName(text)}
                value = {eventName}
                placeholderTextColor = "#10E3A5"
                autoCapitalize="none"
                className = 'p-8 pl-5 text-start rounded-md border border-cyan-100 bg-bg-dark-trans w-[80vw] mt-10 file:h-[20px] text-xl text-white font-bold'	
                returnKeyType="done"
            />
              <TextInput 
                            placeholder = "event location"
                            placeholderTextColor = "rgba(255, 255, 255, 0.17)"
                            className = 'p-8 pl-5 rounded-md border border-cyan-100 bg-bg-dark-trans w-[80vw] mt-10 file:h-[20px] text-[20px] text-white font-bold'	
                            returnKeyType="done"
                            />

            <TextInput 
                            placeholder = "event type "
                            placeholderTextColor = "rgba(255, 255, 255, 0.17)"
                            className = 'p-8 pl-5 rounded-md border border-cyan-100 bg-bg-dark-trans w-[80vw] mt-10 h-[20px] text-[20px] text-white font-bold'	
                            returnKeyType="done"
                            />
            <TouchableOpacity className="p-5  rounded-md border border-primary bg-primary-trans w-auto mt-10  ">
                <Text className="text-2xl text-text">Create</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    );
}