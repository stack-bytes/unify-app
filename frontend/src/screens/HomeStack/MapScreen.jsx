import { View,Text,Image, TouchableOpacity } from "react-native";

import MapView, { Marker } from 'react-native-maps';
import FlagIcon from '../../../assets/icons/flag-icon.svg';
import LocationIcon from '../../../assets/icons/location-icon.svg';
import { useContext, useEffect, useState } from "react";
import { CustomMarker } from "../../components/map/customMarker";
import { CurrentEvent } from "../../components/CurrentEvent";
import LiveStreamingSvg from '../../../assets/icons/streaming.svg';
import LogoutIcon from '../../../assets/icons/logout-icon.svg';
import { EventBillboard } from "../../components/eventBillboard";

import CameraIcon from '../../../assets/icons/camera-icon.svg';
import { UserContext } from "../../contexts/UserContext";

export default function MapScreen({navigation}){
    const [markers, setMarkers] = useState([
        {
            coords: {
                latitude: 37.78825,
                longitude: -122.4324
            }
        },
        {
            coords: {
                latitude: 45.78825,
                longitude: -122.4324
            }
        },
    ]);

    const [focusedMarkerIndex, setFocusedMarkerIndex] = useState(-1);

    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:3000/api/events/getEvents')
            .then(res => res.json())
            .then(data => {
                setMarkers(data);
            })
        setFocusedMarkerIndex(-1);
    }, []);
    return (
        <View className='w-full h-full items-center'>
            <MapView
                className='w-full h-full absolute'
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coords}
                        title={marker.title}
                        description={marker.description}
                        onPress={() => setFocusedMarkerIndex(index)}
                    >
                        <CustomMarker focused={focusedMarkerIndex==index}/>
                    </Marker>
                ))}
            </MapView>
            {
                focusedMarkerIndex != -1 &&     
                    <View className='top-20 justify-center items-center'>
                        <EventBillboard/>
                    </View>
            }
            {
                user.currentEvent && (
                    <View className='w-16 h-16 z-10 bg-[#05B280]/[0.8] absolute right-2 top-44 rounded-full border-4 border-[#10E3A5]/[0.9] items-center justify-center'>
                        <TouchableOpacity 
                            className='z-20 w-full h-full absolute'
                            onPress={() => navigation.getParent('MainStack').navigate('CameraScreen')}
                        />
                        <CameraIcon width='60%' height='60%' fill='white'/>
                    </View>
                )
            }
        </View>
    )
}