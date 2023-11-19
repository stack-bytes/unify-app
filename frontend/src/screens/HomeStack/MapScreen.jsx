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

import * as Location from 'expo-location';

export default function MapScreen({navigation}){
    const [events, setEvents] = useState([
    ]);

    const [focusedMarkerIndex, setFocusedMarkerIndex] = useState(-1);

    const [mapCoords, setMapCoords] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const { user, setLocation } = useContext(UserContext);

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);

    useEffect(() => {
        fetch(`${SERVER_IP}:4949/api/events/getEvents`)
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
        setFocusedMarkerIndex(-1);
    }, []);

    return (
        <View className='w-full h-full items-center'>
            <MapView
                className='w-full h-full absolute'
                onRegionChangeComplete={region => setMapCoords(region)}
            >
                {
                events.map((marker, index) => {
                    return (
                        <Marker
                            key={index}
                            coordinate={marker.coords}
                            onPress={() => setFocusedMarkerIndex(index)}
                            style={{
                                zIndex: 50,
                                width: 30,
                                height: 30,
                                position: 'relative'
                            }}
                        >
                            <CustomMarker focused={focusedMarkerIndex === index}/>
                        </Marker>
                    )
                })}
                <Marker
                    coordinate={user.location?.coords}
                    title='You'
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View className='w-10 h-10'>
                        <Image
                            className='w-full h-full absolute rounded-full border-primary border-2'
                            source={{uri: user.pfp}}
                        />
                    </View>
                </Marker>
            </MapView>
            {
                focusedMarkerIndex != -1 &&     
                    <View className='top-20 justify-center items-center'>
                        <EventBillboard 
                            navigation={navigation}
                            setFocusedMarkerIndex={setFocusedMarkerIndex}
                            event={events[focusedMarkerIndex]}
                        />
                    </View>
            }
            {
                (
                    <View className='w-16 h-16 z-10 bg-[#05B280]/[0.8] absolute right-2 top-72 rounded-full border-4 border-[#10E3A5]/[0.9] items-center justify-center'>
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