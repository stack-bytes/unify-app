import {View, Image, TouchableOpacity, Text, ImageBackground, FlatList} from 'react-native';
import GradientGreen from '../../../assets/backgrounds/GradientGreen.png';
export const GroupsScreen = ({navigation}) => {
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
    

    return(
        <View className='w-full h-full bg-bg-dark'>
        <ImageBackground 
            className='w-full h-full absolute'
            source={GradientGreen}
        />
        <View className='w-full top-20 flex flex-col items-center '>
            <TouchableOpacity onPress={()=>navigation.navigate("FriendsScreen")} className='w-[90%] bg-primary h-auto p-5 rounded-md  flex flex-row items-center justify-center'>
                <Text className="text-4xl text-bg-dark "  style={{fontFamily: 'SpaceGrotesk_700Bold'}} >Friends</Text>
            </TouchableOpacity>

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
        
    </View>
    );
}