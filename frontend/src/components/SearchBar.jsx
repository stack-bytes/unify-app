import {View, TextInput} from 'react-native';

import SearchSvg from '../../assets/icons/search.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const SearchBar = () => {
  return (
    <View className="relative flex flex-row items-center w-full justify-center mb-5">
        <TouchableOpacity className="w-[10vw] z-2 h-auto p-3 pl-[30px] text-text mt-3 bg-bg-dark-trans rounded-tl-md rounded-bl-md text-md flex flex-row items-center justify-center">
            <SearchSvg className="z-10"></SearchSvg>
        </TouchableOpacity>
       
        <TextInput className="w-[80vw] z-2 h-auto p-4  text-text mt-3 bg-bg-dark-trans rounded-tr-md rounded-br-md text-md"   style={{fontFamily: 'SpaceGrotesk_500Medium'}}></TextInput>
    </View>
    
  );
};
