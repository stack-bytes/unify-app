import { View, Text, Image} from 'react-native';
import GradientGreen from "../../../assets/backgrounds/GradientGreen.png";
import { GenericButton } from '../../components/Buttons/genericButton';


export default function AuthScreen() {

    return (
        <View className = 'flex-1 items-center w-full pt-2'>
            <Image 
            source={GradientGreen}
            className = 'bg-bg-dark w-full h-full absolute'/>

            <View className = 'w-full items-center h-full pt-8'>
                <View className = 'items-center justify-center w-full h-[200px]'>
                    <Text className = 'text-[100px] text-[#10E3A5]' style = {{fontFamily: 'SpaceGrotesk_700Bold'}}> Unify </Text>
                    <Text className = 'mt-6 text-white' style = {{fontFamily: 'SpaceGrotesk_700Bold'}}>~ Community's melting pot ~</Text>
                </View>

                <View>
                    <Image
                        source = {require('../../../assets/images/newLogo.png')}
                        className = 'w-96 h-[350px] mt-6'
                    />
                </View>
                

                <View className = 'items-center w-full'>

                    <Text className = 'text-slate-500' style = {{fontFamily: 'SpaceGrotesk_700Bold'}}>new here?</Text>

                    <GenericButton
                        buttonText = 'Create Account'
                        backgroundColor={`rgba(16, 227, 165, 0.17)`}
                        textColor={'#10E3A5'}
                        borderColor = {'#10E3A5'}
                    />

                    <GenericButton
                        buttonText = 'Login'
                        backgroundColor={`rgba(22, 241, 228, 0.17))`}
                        textColor={'#16F1E4'}
                        borderColor = {'#16F1E4'}
                    />
                </View>
            </View>

            
            
        </View>
    )

}