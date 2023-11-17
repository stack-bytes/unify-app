import {View, Image, TouchableOpacity, Text} from 'react-native';
import LiveStreamingSvg from '../../assets/icons/streaming.svg';

export const CurrentEvent = () => {
    return(
            <View className="relative w-[90vw] h-[300px]  rounded-md">
                <Text style={{fontFamily: 'SpaceGrotesk_700Bold'}} className="absolute text-text z-10 top-5 left-5 text-4xl">Loaction</Text>
                <Text style={{fontFamily: 'SpaceGrotesk_500Medium'}} className="absolute text-primary z-10 top-[60px] left-6 text-xl">Loaction</Text>
                <View className="absolute z-20 p-0.5 top-24 left-5 bg-secondary-trans rounded-md border-2 border-primary">
                    <LiveStreamingSvg></LiveStreamingSvg>
                </View>
                <Image className="w-full h-[70%] opacity-70 rounded-t-md" source={{uri:  "https://imgs.search.brave.com/8kGu884s4LEEEGG8fdg0GUhcEAsIFbXE6bzj1HSdnB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmZvcnR1bmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExL0FQMjMz/MTI3MjYyNTU3MjIt/ZTE2OTk0NzczMTI3/NDguanBnP3c9MTQ0/MCZxPTc1"}}/>
                <View className="flex flex-row h-[30%]">
                    <TouchableOpacity className="w-[50%] h-[100%] flex flex-row items-center justify-center bg-red-400  rounded-bl-md">
                        <Text style={{fontFamily: 'SpaceGrotesk_500Medium'}} className="text-3xl text-white">Exit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-[50%] h-[100%] bg-yellow-300 rounded-br-md flex flex-row items-center justify-center">
                        <Text style={{fontFamily: 'SpaceGrotesk_500Medium'}} className="text-3xl text-white">Info</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
} 