import {View, Image, TouchableOpacity, Text, ImageBackground, FlatList} from 'react-native';
import GradientGreen from '../../../assets/backgrounds/GradientGreen.png';
export const GroupsScreen = ({navigation}) => {
    const data = [
        { id: '1', text: 'G1' },
        { id: '2', text: 'G2' },
        { id: '3', text: 'G3' },
        { id: '4', text: 'G4' },
        { id: '5', text: 'G5' },
        { id: '6', text: 'G6' },
        { id: '7', text: 'G7' },
        { id: '8', text: 'G8' },
        { id: '9', text: 'G9' },    
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
                        <Text className='text-4xl bg-bg-dark-trans p-14 text-text ' style={{fontFamily: 'SpaceGrotesk_500Medium'}}>
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