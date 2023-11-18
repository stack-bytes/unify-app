import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export const GenericButton = ({buttonText, backgroundColor, textColor, borderColor, SvgIcon, SvgIconColor}) => {
    return (
        <TouchableOpacity style = {[styles.container, {backgroundColor: backgroundColor ? backgroundColor : 'black'}, {borderColor: borderColor ? borderColor : 'blue'}]}>
           
            <View className = 'flex-row gap-x-3 justify-center'>
                {SvgIcon ? <SvgIcon fill={`${SvgIconColor}`} /> : null}
                
                <Text style = {[styles.text,
                    {color: textColor ? textColor : 'white'}]}>
                    {buttonText}
                </Text> 
            </View>
            
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
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
