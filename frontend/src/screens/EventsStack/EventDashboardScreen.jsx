import {View, Image, TouchableOpacity, Text, ImageBackground, FlatList} from 'react-native';
import GradientGreen from '../../../assets/backgrounds/GradientGreen.png';
import SnowIcon from '../../../assets/icons/snow.svg';
import TrashIcon from '../../../assets/icons/trash-icon.svg';
import XIcon from '../../../assets/icons/X-icon.svg';
import { useContext } from 'react';
import { GenericButton } from '../../components/Buttons/genericButton';
import { KickMemberModal } from '../../components/modals/kickMemberModal';
import { useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import {SERVER_IP} from '../../../settings.json'

export const EventDashboardScreen= () => {

    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {user} = useContext(UserContext);

    return(
        <>
            <View className='w-full h-full bg-bg-dark'>
                <ImageBackground 
                    className='w-full h-full absolute'
                    source={GradientGreen}
                />

                {
                    isModalOpen ? <KickMemberModal /> : null
                }
                
                <View className = 'mt-10 w-[400px] h-[300px]'> 
                    <Text className='text-text text-4xl font-bold text-center mt-10 mb-4' style = {{fontFamily: 'SpaceGrotesk_700Bold'}}>Admin Dashboard</Text>

                    <TouchableOpacity className = 'w-full h-full items-center align-center'>
                        <Image 
                            source = {{uri: 'https://assets.editorial.aetnd.com/uploads/2010/01/new-york-city-edted.jpg'}}
                            className = 'w-[340px] h-[230px] rounded-lg'
                        />
                    </TouchableOpacity>

                    <View className = 'absolute p-1 mt-[205px] ml-[95px]'>
                        <Text className = 'text-white text-[20px]'>Change Background</Text>
                    </View>
                    
                    <View className = 'flex-column gap-y-3 items-center mt-[-70px]'>
                        
                        <View className = 'w-full items-center'>
                            <GenericButton
                                buttonText = 'Set Icebreaker'
                                backgroundColor='rgba(22, 241, 228, 0.13)'
                                textColor={'#16F1E4'}
                                borderColor = {'#16F1E4'}
                                SvgIcon={SnowIcon}
                                SvgIconColor={'#16F1E4'}
                                height = {50}
                            />
                        </View>
                        <View className = 'w-full items-center'>
                            <GenericButton
                                buttonText = 'Kick Member'
                                backgroundColor='rgba(255, 226, 54, 0.13)'
                                textColor={'#FFE236'}
                                borderColor = {'#FFE236'}
                                SvgIcon={XIcon}
                                SvgIconColor={'#FFE236'}
                                height = {50}
                                onPress={() => setIsModalOpen(true)}
                            />
                        </View>
                        <View className = 'w-full items-center'>
                            <GenericButton
                                buttonText = 'Delete Event'
                                backgroundColor='#C94646'
                                textColor={'white'}
                                borderColor = {'transparent'}
                                SvgIcon={TrashIcon}
                                SvgIconColor={'#fff'}
                                height = {50}
                                onPress={()=>{fetch(`${SERVER_IP}:4949/api/events/deleteEvent?eventId=${user.currentEvent._id}`, {
                                    method: 'DELETE',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                });}}
                            />
                        </View>

                        <View className = 'p-2'><Text className = 'text-white'>_______________________________</Text></View>

                        <View className = 'w-full items-center'>
                            <GenericButton
                                buttonText = "Save changes"
                                backgroundColor={`rgba(16, 227, 165, 0.17)`}
                                textColor={'#10E3A5'}
                                borderColor = {'#10E3A5'}
                                SvgIcon={null}
                                SvgIconColor={'#16F1E4'}
                                height = {50}
                            />
                        </View>


                    </View>
                </View>
            </View>
        </>
    );
}