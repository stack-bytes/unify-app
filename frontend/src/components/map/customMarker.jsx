import { useEffect } from "react"
import { View } from "react-native";

import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

import LocationIcon from '../../../assets/icons/location-icon.svg';

export const CustomMarker = ({focused}) => {
    const iconSize = useSharedValue(40);

    useEffect(() => {
        iconSize.value = withSpring(focused ? 50 : 40);
    },[focused]);

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            height: '100%',
        }}>
            <Animated.View
                style={{
                    width: iconSize,
                    height: iconSize,
                }}
            >
                <LocationIcon 
                    fill='#10E3A5'
                    width='100%'
                    height='100%'
                />
            </Animated.View>
        </View>
    )
}