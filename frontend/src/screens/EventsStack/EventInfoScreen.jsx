import {View, Image, TouchableOpacity, Text, ImageBackground, FlatList} from 'react-native';
import GradientGreen from '../../../assets/backgrounds/GradientGreen.png';

import { CurrentEvent } from '../../components/CurrentEvent';
import { UserContext } from '../../contexts/UserContext';

import { useContext, useState, useEffect } from 'react';

export const EventInfoScreen = ({navigation, eventId}) => {
    const [data, setData] = useState([]);
    const {user, event, getEventDetails} = useContext(UserContext);

    useEffect(async () =>{
        await getEventDetails();
    },[]);

  


    return(
        <>
            <View className='w-full h-full flex flex-col items-center justify-start bg-bg-dark'>
                <ImageBackground 
                    className='w-full h-full absolute'
                    source={GradientGreen}
                />
                <View className="mt-20">
                <CurrentEvent manyButttons='share' navigation={navigation} ></CurrentEvent>
                </View>

                <Text className='text-4xl text-text mb-[-20]'>People</Text>

                <FlatList
                className='mt-10'
                data={data}
                vertical={true}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className='w-44 h-44 rounded-lg bg-bg-dark-trans border m-2'>
                        <TouchableOpacity className='w-full h-full flex flex-col items-center justify-center'>
                            <Image className="w-[50%] h-[50%]" source={{uri: "https://imgs.search.brave.com/8kGu884s4LEEEGG8fdg0GUhcEAsIFbXE6bzj1HSdnB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmZvcnR1bmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExL0FQMjMz/MTI3MjYyNTU3MjIt/ZTE2OTk0NzczMTI3/NDguanBnP3c9MTQ0/MCZxPTc1"}}></Image>
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
        </>
    );
}