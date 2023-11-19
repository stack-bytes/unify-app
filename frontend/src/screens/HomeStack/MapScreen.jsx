import { View,Text,Image, TouchableOpacity,  } from "react-native";

import MapView, { Marker } from 'react-native-maps';
import FlagIcon from '../../../assets/icons/flag-icon.svg';
import LocationIcon from '../../../assets/icons/location-icon.svg';
import { useContext, useEffect, useState } from "react";
import { CustomMarker } from "../../components/map/customMarker";
import { CurrentEvent } from "../../components/CurrentEvent";
import LiveStreamingSvg from '../../../assets/icons/streaming.svg';
import LogoutIcon from '../../../assets/icons/logout-icon.svg';
import { EventBillboard } from "../../components/eventBillboard";

import {SERVER_IP} from '../../../settings.json'
import CameraIcon from '../../../assets/icons/camera-icon.svg';
import { UserContext } from "../../contexts/UserContext";

export default function MapScreen({navigation}){
    const [markers, setMarkers] = useState([
    ]);

    const [focusedMarkerIndex, setFocusedMarkerIndex] = useState(-1);

    const [mapCoords, setMapCoords] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const { user, isInEventCreatingMode, setIsInEventCreatingMode } = useContext(UserContext);

    useEffect(() => {
        fetch(`${SERVER_IP}:4949/api/events/getMarkers`)
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
                onRegionChangeComplete={region => setMapCoords(region)}
            >
<<<<<<< HEAD
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: 0,
                            longitude: 0
                        }}
                        title={marker.title}
                        description={marker.description}
                        onPress={() => setFocusedMarkerIndex(index)}
                    >
                        <CustomMarker focused={focusedMarkerIndex==index}/>
                    </Marker>
                ))}
=======
                {
                markers.map((marker, index) => {
                    return (
                        <Marker
                            key={index}
                            coordinate={marker.location}
                            title={marker.title}
                            description={marker.description}
                            onPress={() => setFocusedMarkerIndex(index)}
                            style={{
                                zIndex: 30,
                                width: 30,
                                height: 30
                            }}
                        >
                            <CustomMarker focused={focusedMarkerIndex == index}/>
                        </Marker>
                    )
                })}
                {
                    isInEventCreatingMode &&
                        <Marker
                            coordinate={mapCoords}
                            title='New Event'
                            style={{
                                zIndex: 30,
                                width: 30,
                                height: 30
                            }}
                        >

                        </Marker>
                }
>>>>>>> main
            </MapView>
            {
                focusedMarkerIndex != -1 &&     
                    <View className='top-20 justify-center items-center'>
                        <EventBillboard setFocusedMarkerIndex={setFocusedMarkerIndex}/>
                    </View>
            }
            {
                user.currentEvent && (
                    <View className='w-16 h-16 z-10 bg-[#05B280]/[0.8] absolute right-2 top-72 rounded-full border-4 border-[#10E3A5]/[0.9] items-center justify-center'>
                        <TouchableOpacity 
                            className='z-20 w-full h-full absolute'
                            onPress={() => navigation.getParent('MainStack').navigate('CameraScreen')}
                        />
                        <CameraIcon width='60%' height='60%' fill='white'/>
                    </View>
                )
            }
            {
                isInEventCreatingMode && 
                <>
                    <View className='absolute top-20 w-full items-center gap-y-3'>
                        <View className='rounded-2xl bg-primary/[0.9] border-2 border-[#10C3A5]/[0.4] w-3/4 h-16 items-center justify-center'>
                            <Text
                                className='text-text text-3xl text-center'
                                style={{fontFamily: 'IBMPlexSans_700Bold'}}
                            >
                                CREATING EVENT
                            </Text>
                        </View>
                        <TouchableOpacity 
                            className='rounded-2xl bg-red-700/[0.95] border-2 border-red-950/[0.8] w-1/3 h-9 items-center justify-center'
                            onPress={() => setIsInEventCreatingMode(false)}
                        >
                            <Text
                                className='text-text text-2xl text-center'
                                style={{fontFamily: 'IBMPlexSans_700Bold'}}
                            >
                                CANCEL
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View className='absolute bottom-36 w-full items-center'>
                        <TouchableOpacity 
                            className='rounded-2xl bg-primary border-2 border-red-950/[0.2] w-1/3 h-10 items-center justify-center'
                            onPress={() => {
                                navigation.getParent('NavigationBar').navigate('EventStack', {
                                    screen: 'CreateEventScreen',
                                    params: {
                                        mapCoords: mapCoords
                                    }
                                })
                            }}
                        >
                            <Text
                                className='text-text text-xl text-center'
                                style={{fontFamily: 'IBMPlexSans_700Bold'}}
                            >
                                CONTINUE
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>
    )
}