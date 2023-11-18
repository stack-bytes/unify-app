import {View, Image, TouchableOpacity, Text, ImageBackground, FlatList} from 'react-native';
import GradientGreen from '../../../assets/backgrounds/GradientGreen.png';

export const EventInfoScreen = () => {
    return(
        <>
            <View className='w-full h-full bg-bg-dark'>
                <ImageBackground 
                    className='w-full h-full absolute'
                    source={GradientGreen}
                />
                <View className='relative w-full top-20 flex flex-col items-center '>
                    <TouchableOpacity onPress={()=>navigation.navigate("GroupsScreen")} className='rouned-lg opacity-40 w-[100%] h-[300px] p-5 rounded-md  flex flex-row items-center justify-center'>
                        <Image className="w-full h-full rounded-lg" source={{uri:  "https://imgs.search.brave.com/8kGu884s4LEEEGG8fdg0GUhcEAsIFbXE6bzj1HSdnB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmZvcnR1bmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExL0FQMjMz/MTI3MjYyNTU3MjIt/ZTE2OTk0NzczMTI3/NDguanBnP3c9MTQ0/MCZxPTc1"}}/>
                    </TouchableOpacity>
                    <Text className="absolute top-32 mt-2 text-2xl shadow-xl shadow-black text-text">Change Background</Text>
                </View>
                
            </View>
        </>
    );
}