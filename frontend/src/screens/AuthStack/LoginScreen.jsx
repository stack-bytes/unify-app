import React, {useState} from 'react';
import {Text,  View, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';   
import GradientGreen from "../../../assets/backgrounds/GradientGreen.png";
import { GenericButton } from '../../components/Buttons/genericButton';
import EyeIcon from '../../../assets/icons/eye-solid.svg';
import EyeSlashIcon from '../../../assets/icons/eye-slash-solid.svg';


 export default function LoginScreen({navigation}) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    
    const [textEmail, setTextEmail] = useState('');
    const [textPass, setTextPass] = useState('');

    return (
        <View className = 'flex items-center w-full h-full'>
            <Image 
                source={GradientGreen}
                className = 'bg-bg-dark w-full h-full absolute'
            />

            <View className = 'justify-content items-center pt-28'>
                <Text className = 'text-white text-[20px]' style = {{fontFamily: 'SpaceGrotesk_700Bold'}}> ~ We are glad to have you back ~ </Text>
            </View>

            <View className = 'justify-content items-center w-full'>
                <GenericButton
                    buttonText = 'Continue with apple'
                    backgroundColor={'black'}
                    textColor={'white'}
                    borderColor = {'black'}
                />

                <GenericButton
                    buttonText = 'Continue with google'
                    backgroundColor={`white`}
                    textColor={'black'}
                    borderColor = {'white'}
                />

                <View className = 'justify-center items-center pt-8'>
                    <Text className = 'text-white font-bold'>_____________            _____________</Text>
                    <Text className = 'absolute text-white pt-[44px] font-bold text-[20px]'>or</Text>
                </View>

                <View className = 'h-14 w-[85%] justify-center border-[1px] border-[#10E3A5] rounded-lg bg-[#10E3A5]/[0.18] mt-10'>
                    <TextInput 
                        placeholder = "email"
                        placeholderTextColor = "#10E3A5"
                        style={{fontFamily: 'SpaceGrotesk_500Medium'	}}
                        onChangeText={newText => setTextEmail(newText)}
                        defaultValue = {textEmail}
                        autoCapitalize="none"
                        className = 'pl-2 w-full h-full text-[20px] text-white font-bold'	
                        returnKeyType="done"       
                        
                    />
                </View>

                <View className = 'h-14 w-[85%] justify-center border-[1px] border-[#10E3A5] rounded-lg bg-[#10E3A5]/[0.18] mt-5'>
                    <TextInput 
                        placeholder = "pass****"
                        placeholderTextColor = "#10E3A5"
                        style={{fontFamily: 'SpaceGrotesk_500Medium'	}}
                        onChangeText={newText => setTextPass(newText)}
                        //defaultValue = {textPass}
                        value={textPass}
                        autoCapitalize="none"
                        className = 'pl-2 w-full h-full text-[20px] text-white font-bold'	
                        returnKeyType="done"    
                        secureTextEntry={!isPasswordVisible}  
                        
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} className='absolute right-0 w-16 h-[50%] z-20'>
                        {
                            isPasswordVisible ? <EyeIcon height='100%'/>
                            : <EyeSlashIcon />
                        }
                    </TouchableOpacity>
                </View>
                
                <View className = 'w-[70%] items-center mt-3' >
                    <GenericButton
                        buttonText = 'log in'
                        backgroundColor='rgba(22, 241, 228, 0.35)'
                        textColor={'#16F1E4'}
                        borderColor = {'#16F1E4'}

                    />
                </View>
            </View>
        </View>
    )
}


