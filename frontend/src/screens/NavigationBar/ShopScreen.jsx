import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

import GradientBlue from '../../../assets/backgrounds/GradientBlue.png';
import ChestIcon from '../../../assets/shopItems/chest-icon.svg';


import {SERVER_IP} from '../../../settings.json'




export default function ShopScreen({navigation}){
    const [data, setData] = useState([])
    
    
    useEffect(()=> {
        fetch(`${SERVER_IP}:4949/api/awards/getDailyShop`)
        .then(res => res.json())
        .then((res) => {setData(res)})
    },[])


    return (
        <View className='w-full h-full'>
            <Image 
                className='w-full h-full absolute'
                source={GradientBlue}
            />
            <View className='w-full h-full items-center top-20 flex gap-y-10'>
                <View className='flex items-center w-1/2 gap-y-2'>
                    <Text 
                        style={{fontFamily: 'SpaceGrotesk_500Medium'}}
                        className='text-text text-6xl'
                    >
                        Shop
                    </Text>
                    <View className='w-[50%] rounded-xl bg-[#16F1E4]/[0.22] border-2 border-primary justify-center items-center'>
                        <Text 
                            style={{fontFamily: 'SpaceGrotesk_500Medium'}}
                            className='text-text text-2xl'
                        >
                            1000p
                        </Text>
                    </View>
                </View>
                <TouchableOpacity className="w-[80%] h-72 flex flex-row items-center justify-center">
                <View className='w-full h-72'>
                    <View className='w-full h-[300px] bg-[#16f1e4]/[0.22] border-2 rounded-xl border-[#16F1E4]/[0.92]'>
                        <View className='w-full justify-start mt-6 ml-6'>
                            <Text
                                style={{fontFamily: 'SpaceGrotesk_500Medium'}}
                                className='text-text text-4xl'
                            >
                                Mistery Crate
                            </Text>
                        </View>
                        <View className='w-full mt-6 h-[50%] bg flex justify-center items-center'>
                            <ChestIcon width='100%' height='100%' fill='#16F1E4'/>
                        </View>

                        <View className='absolute bottom-2 right-2 rounded-xl w-20 bg-[#16F1E4]/[0.22] border-2 border-[#16F1E4]/[0.92]'>
                            <Text
                                style={{fontFamily: 'SpaceGrotesk_500Medium'}}
                                className='text-text text-2xl text-center'
                            >
                                100p
                            </Text>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
                

                <View className='w-[80%] h-full'>
                    <FlatList 
                        data={data}
                        keyExtractor={(item) => item.name}
                        numColumns={2}
                        contentContainerStyle={{flex:'column', justifyContent:'space-around'}}
                        scrollEnabled
                        renderItem={({item}) => (
                            <TouchableOpacity>
                                <View className='w-40 bg-[#121212]/[0.29] border-2 border-[#121212] h-40 rounded-xl mr-2 mt-2 items-center flex'>
                                <View className='h-1/2 w-[90%] items-center mt-4'>
                                    <View className='w-16 h-16'>
                                        <Image 
                                            className='w-full h-full object-cover'
                                            source={{uri: item.icon}}
                                        />
                                    </View>

                                    <View>
                                        <Text
                                            style={{fontFamily: 'SpaceGrotesk_500Medium'}}
                                            className='text-text text-md text-center pb-3'
                                        >
                                            {item.name}
                                        </Text>
                                    </View>
                                </View>

                                <View className='absolute bottom-1 right-2 border-[#121212] border-2 rounded-xl w-14 h-6 justify-center items-center flex'>
                                    <Text 
                                        className='text-text text-sm'
                                        style={{fontFamily: 'SpaceGrotesk_300Light'}}
                                    >
                                        {item.price}p
                                    </Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            
                        )}
                    />
                </View>
            </View>
        </View>
    )
}