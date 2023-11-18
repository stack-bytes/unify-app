import {View, Text, StyleSheet} from 'react-native';
import LiveStreamingSvg from '../../assets/icons/streaming.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { UserContext } from '../contexts/UserContext';


const EventLine = ({eventTitle, eventLocation, navigation}) => {



  return (
    <TouchableOpacity onPress={()=>{
        navigation.getParent("NavigationBar").navigate("EventStack",{screen:"EventInfoScreen"});
    }}
    className="w-[90vw] h-[auto] bg-bg-dark-trans rounded-md p-2 mt-5 flex flex-row items-center justify-start">
      <View className="p-0.5 bg-secondary-trans rounded-md border-2 border-primary">
        <LiveStreamingSvg></LiveStreamingSvg>
      </View>
      <View className="flex flex-col ml-2">
        <Text
          className="text-xl text-gray-400"
          style={{fontFamily: 'SpaceGrotesk_700Bold'}}>
          {eventTitle}
        </Text>
        <Text
          className=" text-primary text-sm mt-[-1]"
          style={{fontFamily: 'SpaceGrotesk_500Medium'}}>
          {eventLocation}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventLine;

const styles = StyleSheet.create({});
