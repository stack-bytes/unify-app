import { ImageBackground, View ,Text,Image, FlatList } from "react-native";


import GradientBlue from '../../../assets/backgrounds/GradientBlue.png'
import { SpaceGrotesk_400Regular } from "@expo-google-fonts/space-grotesk";

import LiveStreamingSvg from '../../../assets/icons/streaming.svg';
import { TouchableOpacity } from "react-native-gesture-handler";
import EventLine from '../../components/EventLine';

export default function ProfileScreen({navigation}){
    const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 4' },
    { id: '5', text: 'Item 5' },
    { id: '6', text: 'Item 6' },
    { id: '7', text: 'Item 7' },
    { id: '8', text: 'Item 8' },
    { id: '9', text: 'Item 9' },    
];

    return (
        <View className='w-full h-full'>
            <ImageBackground source={GradientBlue} className='w-full h-full flex flex-col items-center justify-start'>
            <View className='w-full h-full p-2 flex flex-col items-center justify-start'>
                    <View className='w-[250px] h-[250px] mt-20'>
                        <TouchableOpacity onPress={()=>navigation.getParent('ProfileStack').navigate("UserSettingsScreen")}>
                        <Image 
                            source={{uri: "https://imgs.search.brave.com/8kGu884s4LEEEGG8fdg0GUhcEAsIFbXE6bzj1HSdnB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmZvcnR1bmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExL0FQMjMz/MTI3MjYyNTU3MjIt/ZTE2OTk0NzczMTI3/NDguanBnP3c9MTQ0/MCZxPTc1"}}
                            className='w-full h-full rounded-full border-8 border-bg-light'
                        />
                        </TouchableOpacity>
                        
                        <View className='absolute rounded-full w-10 h-10 bottom-5 right-2 bg-bg-dark flex justify-center items-center'>
                            <View className='rounded-full w-8 h-8 bg-primary'/>
                        </View>
                        <View className='absolute rounded-full w-10 h-10 bottom-14 right-[-10]  bg-bg-dark opacity-90 border-4 flex justify-center items-center'>
                            <Text className='rounded-full'>👻</Text>
                        </View>
                    </View>
                    <Text className="text-4xl mt-5 text-text" style={{fontFamily: 'SpaceGrotesk_700Bold'}}>Username</Text>
                    <Text className="text-xl mt-1 mb-5 text-gray-400" style={{fontFamily: 'SpaceGrotesk_700Bold'}}>he / him</Text>
                    <EventLine className="z-2" eventLocation={"Arad"} eventTitle={"Mobtrap Fan Meeting"} navigation={navigation}/>
                <FlatList
                className='mt-[-12]'
                data={data}
                horizontal={true}
                numRows={1} // Rows
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View className="flex m-5 mt-10  items-center">
                    <View className='w-44 h-44 rounded-lg bg-bg-dark-trans border'>
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
                  </View>
                )}
                contentContainerStyle={"flex-column"}
            />
            </View>
           
            </ImageBackground>
        </View>
    )
}