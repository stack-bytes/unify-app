import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';

import SwitchIcon from '../../../assets/icons/switch-icon.svg';
import TrashIcon from '../../../assets/icons/trash-icon.svg';
import LocationIcon from '../../../assets/icons/location-icon.svg';
import FlagIcon from '../../../assets/icons/flag-icon.svg';

export const CameraScreen = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [image, setImage] = useState(null);
    const cameraRef = useRef(null);
  
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
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View className='flex items-center w-full h-full'>
        <View className='w-full h-40 absolute top-20 bg-transparent z-30 items-center justify-start p-5 gap-y-2'>
          <View className='h-8 w-full flex-row items-center justify-center gap-x-1'>
            <LocationIcon height='100%' fill='white'/>
            <Text
              style={{fontFamily: 'SpaceGrotesk_300Light'}}
              className='text-text text-xl'
            >
              Universitate
            </Text>
          </View>

          <View className='h-16 w-full flex-row items-center justify-center gap-x-2'>
            <FlagIcon height='100%' fill='white'/>
            <Text
              style={{fontFamily: 'SpaceGrotesk_700Bold'}}
              className='text-text text-5xl'
            >
              Hackathon
            </Text>
          </View>
        </View>
        {
          image ?
            <View className='w-full h-full absolute z-20'>
              <View className='w-full h-full absolute opacity-30 bg-bg-dark z-10'/>
              <Image source={{uri: image}} className='w-full h-full absolute' />

              <View className='absolute w-full h-20 items-center z-20 bottom-40 flex-row justify-center'>
                <TouchableOpacity
                  className='absolute w-10 h-10 right-10 bg-[#C94646] border-2 border-[#BF4040]/[0.71] rounded-full items-center justify-center'
                  onPress={() => setImage(null)}
                >
                  <TrashIcon height='100%' fill='white'/>
                </TouchableOpacity>
                <TouchableOpacity
                  className='w-32 h-10 bg-primary/[0.17] border-2 border-primary/[0.93] rounded-2xl items-center justify-center flex'
                  onPress={takePhoto}
                >
                  <Text 
                    className='text-base text-text'
                    style={{
                      fontFamily: 'IBMPlexSans_700Bold'
                    }}
                  >
                    Post Photo
                  </Text>
                </TouchableOpacity>

              </View>
            </View>
          :
            <View className='absolute w-full h-20 items-center z-20 bottom-40 flex-row justify-center'>
              <TouchableOpacity
                className='absolute w-10 h-10 left-6'
                onPress={() =>   setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                )}
              >
                <SwitchIcon height='100%' fill='white'/>
              </TouchableOpacity>
              <TouchableOpacity
                className='w-20 h-20 bg-transparent border-8 border-white rounded-full'
                onPress={takePhoto}
              />

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