import { ImageBackground, View ,Text,Image, FlatList } from "react-native";


import GradientBlue from '../../../assets/backgrounds/GradientBlue.png'
import { SpaceGrotesk_400Regular } from "@expo-google-fonts/space-grotesk";

import LiveStreamingSvg from '../../../assets/icons/streaming.svg';
import { TouchableOpacity } from "react-native-gesture-handler";
import EventLine from '../../components/EventLine';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

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
    const {user, toggleGhostMode} = useContext(UserContext);
    return (
        <View className='w-full h-full'>
            <ImageBackground source={GradientBlue} className='w-full h-full flex flex-col items-center justify-start'>
            <View className='w-full h-full p-2 flex flex-col items-center justify-start'>
                    <View className='w-[250px] h-[250px] mt-20'>
                        <TouchableOpacity onPress={()=>navigation.getParent('ProfileStack').navigate("UserSettingsScreen")}>
                        <Image 
                            source={{uri: "https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"}}
                            className='w-full h-full rounded-full border-8 border-bg-light'
                        />
                        </TouchableOpacity>
                        
                        <View className='absolute rounded-full w-10 h-10 bottom-5 right-2 bg-bg-dark flex justify-center items-center'>
                            <View className='rounded-full w-8 h-8' style = {{backgroundColor: user.ghostMode ? 'green' : 'orange'}}/>
                        </View>
                        <View className='absolute rounded-full w-10 h-10 bottom-14 right-[-10]  bg-bg-dark opacity-90 border-4 flex justify-center items-center'>
                            
                                    {console.log(user.ghostMode)}
                                    <Text className='rounded-full' onPress = {toggleGhostMode}>👻</Text>
                            
                        </View>
                    </View>
                    <Text className="text-4xl mt-5 text-text" style={{fontFamily: 'SpaceGrotesk_700Bold'}}>Username</Text>
                    <Text className="text-xl mt-1 mb-5 text-gray-400" style={{fontFamily: 'SpaceGrotesk_700Bold'}}>he / him</Text>
                    <EventLine className="z-2" eventLocation={"Arad"} eventTitle={"Mock Event Title"} navigation={navigation}/>
                <View className = 'mt-[-28]'>
                  <FlatList
                    className=''
                    data={data}
                    horizontal={true}
                    numRows={1} // Rows
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                    <View className="flex m-5 mt-10  items-center">
                        <View className='w-44 h-44 rounded-lg bg-bg-dark-trans border'>
                            <TouchableOpacity className='w-full h-full flex flex-col items-center justify-center'>
                                <Image className="w-[50%] h-[50%]" source={{uri: "data:image/png;base64,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"}}></Image>
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
                
            </View>
           
            </ImageBackground>
        </View>
    )
}