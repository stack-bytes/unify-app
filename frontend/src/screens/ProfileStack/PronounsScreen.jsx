import { Text, View, Image, TextInput, FlatList, TouchableOpacity} from "react-native";
import { GenericButton } from "../../components/Buttons/genericButton";
 
import GradientGreen from "../../../assets/backgrounds/GradientGreen.png";
import { useState } from "react";
import flagIcon from "../../../assets/icons/flag-icon.svg";	


export default function PronounsScreen() {




    const [text, setText] = useState('');
    const [pronouns, setPronouns] = useState([
        {
            id: '1',
            title: 'She/Her',
        },
        {
            id: '2',
            title: 'He/Him',
        },
        {
            id: '3',
            title: 'They/Them',
        },
        {
            id: '4',
            title: 'Custom',
        },
    ]);



    return (
        <View className = 'flex-1 items-center w-full h'>
            <Image 
            source={GradientGreen}
            className = 'bg-bg-dark w-full h-full absolute'/>

            <View className = 'h-full w-full pt-16'>
                <View className = 'items-center h-40 w-full'>
                    <View className = "h-14 w-[85%] items-center justify-center border-[1px] rounded-lg bg-slate-950/[.15]">
                        <TextInput 
                            placeholder = "Add pronouns ..."
                            placeholderTextColor = "rgba(255, 255, 255, 0.17)"
                            onChangeText={newText => setText(newText)}
                            defaultValue = {text}
                            className = 'pl-2 w-full h-full text-[20px] text-white font-bold'	
                            />
                    </View>
                    <View className = 'w-[85%] pt-2'>
                        <FlatList
                                className = 'w-full'
                                data={pronouns}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    
                                    <TouchableOpacity>
                                        <View className = 'w-24 h-8 items-center justify-center border-[1px] rounded-lg bg-slate-950/[.15] mr-4'>
                                            <Text className = 'text-white/[0.4] text-[12px] font-bold'>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>

                                ) }
                                keyExtractor={item => item.id}
                        />
                    </View>
                </View>	


                

                

                <View className = 'items-center w-full'>

                    <GenericButton 
                        buttonText = "Save changes"
                        backgroundColor={`rgba(16, 227, 165, 0.17)`}
                        textColor={'#10E3A5'}
                        borderColor = {'#10E3A5'}
                    />
                    
                    <GenericButton
                        buttonText = "Back"
                        backgroundColor={`rgba(201, 70, 70, 0.17))`}
                        textColor={'#C94646'}
                        borderColor = {'#C94646'}
                    />

                </View>
            </View>

            
                
        </View>
        
        
    )
}
