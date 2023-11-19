import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';

import SwitchIcon from '../../../assets/icons/switch-icon.svg';
import TrashIcon from '../../../assets/icons/trash-icon.svg';
import LocationIcon from '../../../assets/icons/location-icon.svg';
import FlagIcon from '../../../assets/icons/flag-icon.svg';
import ArrowIcon from '../../../assets/icons/arrow-icon.svg';
import { UserContext } from '../../contexts/UserContext';

import {SERVER_IP} from '../../../settings.json';

export const CameraScreen = ({navigation, route}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [image, setImage] = useState(null);
    const cameraRef = useRef(null);

    const { user } = useContext(UserContext);
  
    const takePhoto = async () => {
      if(cameraRef){
        try {
          const data = await cameraRef.current.takePictureAsync();
          console.log(data);
          setImage(data.uri);
        } catch(e) {
          console.log(e);
        }
      }
    }
    
    const postPhoto = async () => {
      try {
        const formData = new FormData();
        formData.append('photo', {
          uri: image,
          type: 'image/jpg',
          name: 'test'
        })
        formData.append('eventId', user.currentEvent._id)
        formData.append('userId', user.id)

        fetch(`${SERVER_IP}:4949/api/photos/postPhoto`, {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }).then((response) => response.json())
        .then((data) => {
          console.log(data);
        })

        navigation.getParent().navigate('HomeStack', {
          screen: 'MapScreen'
        });
      } catch (e) {
        console.log(e);
      }
    }
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
    
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        //navigation.navigate('MapScreen');
      });

      return unsubscribe;
    },[navigation]);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View className='flex items-center w-full h-full'>
        { user.currentEvent && (
        <View className='w-full h-40 absolute top-20 bg-transparent z-30 items-center justify-start p-5 gap-y-2'>
          <View className='h-8 w-full flex-row items-center justify-center gap-x-1'>
            <LocationIcon height='100%' fill='white'/>
            <Text
              style={{fontFamily: 'SpaceGrotesk_300Light'}}
              className='text-text text-xl'
            >
              {user.currentEvent.location}
            </Text>
          </View>

          <View className='h-16 w-full flex-row items-center justify-center gap-x-2'>
            <FlagIcon height='100%' fill='white'/>
            <Text
              style={{fontFamily: 'SpaceGrotesk_700Bold'}}
              className='text-text text-5xl'
            >
              {user.currentEvent.name}
            </Text>
          </View>
        </View>
        )}
        {
          image ? (
            <View className='w-full h-full absolute z-20'>
              <View className='w-full h-full absolute opacity-30 bg-bg-dark z-10'/>
              <Image source={{uri: image}} className='w-full h-full absolute' />

              <View className='absolute w-full h-20 items-center z-20 bottom-20 flex-row justify-center'>
                <TouchableOpacity
                  className='absolute w-10 h-10 right-10 bg-[#C94646] border-2 border-[#BF4040]/[0.71] rounded-full items-center justify-center'
                  onPress={() => setImage(null)}
                >
                  <TrashIcon height='100%' fill='white'/>
                </TouchableOpacity>
                <TouchableOpacity
                  className='w-32 h-10 bg-primary/[0.17] border-2 border-primary/[0.93] rounded-2xl items-center justify-center flex'
                  onPress={user.currentEvent ? postPhoto : () => navigation.getParent().navigate('EventStack', {screen: 'CreateEventScreen'})}
                >
                  <Text 
                    className='text-base text-text'
                    style={{
                      fontFamily: 'IBMPlexSans_700Bold'
                    }}
                  >
                    {user.currentEvent ? 'Post Photo' : 'Create Event'}
                  </Text>
                </TouchableOpacity>

              </View>
            </View>
          )
          :
            <View className='absolute w-full h-20 items-center z-20 bottom-20 flex-row justify-center'>
              <TouchableOpacity
                className='absolute w-20 h-20 left-10 justify-center'
                onPress={() => navigation.goBack()}
              >
                <ArrowIcon 
                  height='150%' width='40%' fill='white'
                  style = {{
                    transform: [
                      {rotate: '90deg'}
                    ]
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                className='w-20 h-20 bg-transparent border-8 border-white rounded-full'
                onPress={takePhoto}
              />
              <TouchableOpacity
                className='absolute w-10 h-10 right-10'
                onPress={() =>   setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                )}
              >
                <SwitchIcon height='100%' fill='white'/>
              </TouchableOpacity>

            </View>
        }
        <Camera 
          className='absolute w-full h-full'
          type={type}
          ref={cameraRef}
        />
      </View>
    );
}