import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export const GenericButton = ({buttonText, backgroundColor, textColor}) => {
    return (
        <TouchableOpacity style = {[styles.container, {backgroundColor: backgroundColor ? backgroundColor : 'black'}]}>
            <Text style = {[styles.text]}>{buttonText}</Text>
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#10E3A5',
        flexDirection: 'row',
        elevation: 3,
        backgroundColor:'black',
        height: 64,
        width: '85%',
    },   
    text: {
        fontSize: 24,
        fontFamily: 'IBMPlexSans_700Bold',
        color: '#10E3A5',
      },

    },
)
