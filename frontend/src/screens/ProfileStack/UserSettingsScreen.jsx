import { Text, View, Image, TextInput, FlatList, TouchableOpacity, ImageBackground} from "react-native";
import { GenericButton } from "../../components/Buttons/genericButton";
 
import GradientGreen from "../../../assets/backgrounds/GradientGreen.png";


export const UserSettingsScreen = ({navigation}) => {
    return(<>
        <View className='w-full h-full bg-bg-dark'>
            <ImageBackground 
                className='w-full h-full absolute'
                source={GradientGreen}
            />
            <View className='w-full h-full items-center top-20'>
            <View className="flex flex-col items-center w-full justify-center mb-5">
                <TextInput placeholder="Username" className="w-[85vw] z-2 h-auto p-5  text-text mt-3 bg-bg-dark-trans rounded-md rounded-br-md text-md"   style={{fontFamily: 'SpaceGrotesk_500Medium'}}></TextInput>
                <TextInput placeholder="Email" className="w-[85vw] z-2 h-auto p-5  text-text mt-3 bg-bg-dark-trans rounded-md rounded-br-md text-md"   style={{fontFamily: 'SpaceGrotesk_500Medium'}}></TextInput>
            </View>
            <GenericButton 
            onPress={()=>navigation.navigate("UserProfileScreen")}
                        buttonText = "Save changes"
                        backgroundColor={`rgba(16, 227, 165, 0.17)`}
                        textColor={'#10E3A5'}
                        borderColor = {'#10E3A5'}
            />
            <View className="w-[85%] h-[1.5px] mt-6 mb-4 bg-text"></View>

            <GenericButton 
                        buttonText = "Pronouns"
                        backgroundColor={`#16F1E464`}
                        textColor={'#16F1E4'}
                        borderColor = {'#16F1E4'}
                        onPress={()=>navigation.navigate("PronounsScreen")}
            />
            
            <View className="w-[85%] h-[1.5px] mt-6 mb-4 bg-text"></View>
            
            <GenericButton 
                        buttonText = "Download your data"
                        backgroundColor={`#F5C21166`}
                        textColor={'#F5C211'}
                        borderColor = {'#F5C211'}
            />
             <GenericButton 
                        buttonText = "Logout"
                        backgroundColor={`#BF404088`}
                        textColor={'#CC4040'}
                        borderColor = {'#CC4040'}
            />

            <View className="w-[85%] h-[1.5px] mt-6 mb-4 bg-text"></View>
            <GenericButton 
                        buttonText = "Delete Account"
                        backgroundColor={`#CC4040`}
                        textColor={'#FFFFFF'}
                        borderColor = {'#CC4040'}
            />


            </View>
        </View>
    </>);
}