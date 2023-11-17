import { FlatList, Image, Text, View } from "react-native";


import GradientBlue from '../../../assets/backgrounds/GradientBlue.png';
import ChestIcon from '../../../assets/shopItems/chest-icon.svg';

const data = [
    {
        name: 'Mistery Crate',
        points: 100,
        icon: 'https://mongodb-js.github.io/leaf/mongodb-leaf_512x512.png',
    },
    {
        name: 'Mistery test',
        points: 100,
        icon: 'https://cdn-icons-png.flaticon.com/512/3395/3395949.png',
    },
    {
        name: 'Mistery 43',
        points: 100,
        icon: 'https://mongodb-js.github.io/leaf/mongodb-leaf_512x512.png',
    },
    {
        name: 'Mistery gad',
        points: 100,
        icon: 'https://mongodb-js.github.io/leaf/mongodb-leaf_512x512.png',
    }
]

export default function ShopScreen({navigation}){
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
                            1k p
                        </Text>
                    </View>
                </View>
                <View className='w-[80%] h-72'>
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

                <View className='w-[80%] h-full'>
                    <FlatList 
                        data={data}
                        keyExtractor={(item) => item.name}
                        numColumns={2}
                        contentContainerStyle={{flex:'column', justifyContent:'space-around'}}
                        scrollEnabled
                        renderItem={({item}) => (
                            <View className='w-40 bg-[#121212]/[0.29] border-2 border-[#121212] h-40 rounded-xl mr-2 mt-2 items-center flex'>
                                <View className='h-1/2 w-[90%] items-center mt-4'>
                                    <View className='w-full h-18'>
                                        <Image 
                                            className='w-full h-full object-cover'
                                            source={{uri: item.icon}}
                                        />
                                    </View>

                                    <View>
                                        <Text
                                            style={{fontFamily: 'SpaceGrotesk_500Medium'}}
                                            className='text-text text-xl text-center'
                                        >
                                            {item.name}
                                        </Text>
                                    </View>
                                </View>

                                <View className='absolute bottom-2 right-2 border-[#121212] border-2 rounded-xl w-14 h-6 justify-center items-center flex'>
                                    <Text 
                                        className='text-text text-sm'
                                        style={{fontFamily: 'SpaceGrotesk_300Light'}}
                                    >
                                        {item.points}p
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}