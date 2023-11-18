import { Text, View, Image, TextInput, FlatList, TouchableOpacity, Keyboard} from "react-native";
import { GenericButton } from "../../components/Buttons/genericButton";
 
import GradientGreen from "../../../assets/backgrounds/GradientGreen.png";
import { useState } from "react";

import flagIcon from "../../../assets/icons/flag-icon.svg";	


export default function PronounsScreen({navigation}) {

    const [text, setText] = useState('');
    const [pronouns, setPronouns] = useState([]);
    const [orientation, setOrientation] = useState([
        {key: '0', flagURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Orange_and_Pink_Lesbian_flag.svg/2560px-Orange_and_Pink_Lesbian_flag.svg.png', text: 'Lesbian'},
        {key: '0', flagURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/255px-Gay_Pride_Flag.svg.png', text: 'Gay'},
        {key: '0', flagURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bisexual_Pride_Flag.svg/640px-Bisexual_Pride_Flag.svg.png', text: 'Bisexual'},
        {key: '0', flagURI: 'https://hrc.imgix.net/Trans-flag-share1200.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&ixlib=php-3.3.1&w=400&s=b094ae0bde5d8a4a45ef3d3fea7e3825', text: 'Transgender'},
        {key: '0', flagURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Asexual_Pride_Flag.svg/1024px-Asexual_Pride_Flag.svg.png', text: 'Asexual'},
        {key: '0', flagURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Intersex_Pride_Flag.svg/640px-Intersex_Pride_Flag.svg.png', text: 'Intersex'},
        {key: '0', flagURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pansexuality_Pride_Flag.svg/1200px-Pansexuality_Pride_Flag.svg.png', text: 'Pansexual'},
        //{key: '0', flagURI: 'https://www.dea.gov/sites/default/files/styles/large/public/2022-06/LBGTQA%2B1_new.jpg?h=0e4a0220&itok=Bif4Jgwg', text: 'Custom'},



    ]);

    const handleAddPronoun = () => {
        if(text.trim() !== '') {
            setPronouns([...pronouns, {key: String(pronouns.length), text: text}]);
            setText('');
        }
    }

    const handleDeletePronoun = (key) => {
        const update = pronouns.filter(item => item.key !== key);
        setPronouns(update);
    }



    return (
        <View className = 'flex-1 items-center w-full'>
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
                            onSubmitEditing={() => {
                                handleAddPronoun();
                                //Keyboard.dismiss();
                            }}
                            returnKeyType="done"
                            />
                    </View>
                    <View className = 'w-[85%] pt-2 pb-2 '>
                        <FlatList
                                className = 'w-full'
                                data={pronouns}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    
                                    <TouchableOpacity onPress = {() => handleDeletePronoun(item.key)}>
                                        <View className = 'w-24 h-8 items-center justify-center border-[1px] rounded-lg bg-slate-950/[.15] mr-4'>
                                            <Text className = 'text-white/[0.4] text-[12px] font-bold'
                                            
                                            >
                                                {item.text}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                ) }
                                keyExtractor={item => item.id}
                        />
                    </View>
                    <View className = 'border-[1px] border-opacity-50 w-[85%] h-[200px]'>
                        
                       <View className = 'items-center p-3 bg-slate-950/[.15]'>
                            <Text className = 'text-white text-[22px]'>
                                 Orientation
                            </Text>
                        </View>     

                        <FlatList
                            className='w-full h-full'
                            data={orientation}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            // ListHeaderComponent={() => (
                            //     <View className = 'items-center p-3 bg-[#151515]'>
                            //         <Text className = 'text-white text-[22px]'>
                            //             Orientation
                            //         </Text>
                            //     </View>
                            // )
                            // }
                            // stickyHeaderIndices={[0]}
                            renderItem={({ item }) => (
                                <View className = 'flex items-center justify-center mt-1 h-12 w-[100%]'>
                                    <View className = 'flex-row justify-center items-center h-full w-full gap-x-3'>
                                        
                                        <Image 
                                            source={{uri: item.flagURI}}
                                            className = 'absolute left-16 w-8 h-6'
                                        />    

                                        <View className = 'left-0'>
                                            <Text className = 'text-white text-[16px] font-bold'>
                                                {item.text}
                                            </Text>
                                        </View>

                                        
                                    </View>	
                                </View>
                            )}
                        />

                </View>
                    
                </View>	

                <View className = 'items-center w-full relative mt-40'>

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
                        onPress={()=>navigation.navigate("UserSettingsScreen")}
                    />

                </View>
            </View>

            
                
        </View>
        
        
    )
}
