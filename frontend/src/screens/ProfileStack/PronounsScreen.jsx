import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { GenericButton } from "../../components/Buttons/genericButton";




export default function PronounsScreen() {
    return (
        <View className = 'flex-1 items-center justify-center'>
            <GenericButton 
                buttonText = "Save"
                backgroundColor={`rgba(16, 227, 165, 0.17)`}
             
                //textColor={'red'}

            />
                
        </View>
        
        
    )
}
