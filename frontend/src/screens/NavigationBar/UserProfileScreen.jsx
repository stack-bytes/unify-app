import { ImageBackground, View ,Text,Image, FlatList } from "react-native";

import GradientBlue from '../../../assets/backgrounds/GradientBlue.png'
import { SpaceGrotesk_400Regular } from "@expo-google-fonts/space-grotesk";

import LiveStreamingSvg from '../../../assets/icons/streaming.svg';
import { TouchableOpacity } from "react-native-gesture-handler";
import EventLine from '../../components/EventLine';
import { useContext } from "react";

import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function ProfileScreen({navigation}){
    const {user, toggleGhostMode} = useContext(UserContext);

    const [data, setData] = useState(user.awards);

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
                                <Image className="w-[50%] h-[50%]" source={{uri: item.img}}></Image>
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