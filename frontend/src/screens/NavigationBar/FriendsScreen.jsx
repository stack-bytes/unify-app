import {View, Image, TouchableOpacity, Text, ImageBackground, FlatList} from 'react-native';
import GradientGreen from '../../../assets/backgrounds/GradientGreen.png';

export const FriendsScreen = ({navigation}) => {
        const data = [
    { id: '1', text: 'Andrew' , img:"https://img.freepik.com/free-photo/portrait-smiley-woman_23-2148827181.jpg?w=1380&t=st=1700380962~exp=1700381562~hmac=7e7c06d4b650c39b30c2c21460561ccd5171bcbd5b6766a08e1e1376b321a2cf"},
    { id: '2', text: 'Mathilda' , img:"https://img.freepik.com/free-photo/medium-shot-smiley-woman-talking-phone_23-2149233969.jpg?w=1380&t=st=1700381008~exp=1700381608~hmac=bf47f6d5a0830e1e3d32c3043601485721498f5e87aeb52d05964fc9782eccd4"},
    { id: '3', text: 'Elsa' , img:"https://img.freepik.com/premium-photo/portrait-happy-young-man-shirt-5466_208657-2950.jpg?size=626&ext=jpg&ga=GA1.1.1553799837.1700226165&semt=sph"},
    { id: '4', text: 'David' , img:"https://img.freepik.com/free-photo/woman-with-curly-hair-posing_144627-44048.jpg?w=740&t=st=1700381125~exp=1700381725~hmac=65ac9b08d5b75a21c6c25740e230273146b8794e5772b34756f9b8e49b3d5a26"},
    { id: '5', text: 'Charles' , img:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1553799837.1700226165&semt=sph"},
    { id: '6', text: 'Kevin' , img:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1553799837.1700226165&semt=sph"},
    { id: '7', text: 'Maria' , img:"https://img.freepik.com/free-photo/content-attractive-young-woman_74855-2713.jpg?w=1380&t=st=1700381094~exp=1700381694~hmac=038e2265b2c060b5b52cf7503fcab11c0f204b7eb13ab4c7963f7f83a77094df"},
    { id: '8', text: 'Luisa' , img:"https://img.freepik.com/free-photo/beautiful-girl-stands-park_8353-5084.jpg?size=626&ext=jpg&ga=GA1.1.1553799837.1700226165&semt=sph"},
    { id: '9', text: 'Gabe' , img:"https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.1.1553799837.1700226165&semt=sph"},    
];

    return(
         <View className='w-full h-full bg-bg-dark'>
            <ImageBackground 
                className='w-full h-full absolute'
                source={GradientGreen}
            />
            <View className='w-full top-20 flex flex-col items-center '>
                <TouchableOpacity onPress={()=>navigation.navigate("GroupsScreen")} className='w-[90%] bg-primary h-auto p-5 rounded-md  flex flex-row items-center justify-center'>
                    <Text className="text-4xl text-bg-dark "  style={{fontFamily: 'SpaceGrotesk_700Bold'}} >Groups</Text>
                </TouchableOpacity>

                <FlatList
                className='mt-10'
                data={data}
                vertical={true}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className='w-44 h-44 rounded-lg bg-bg-dark-trans border m-2'>
                        <TouchableOpacity className='w-full h-full flex flex-col items-center justify-center'>
                            <Image className="w-[50%] h-[50%] rounded-md" source={{uri: item.img}}></Image>
                            <Text className='text-xl text-text mt-2 ' style={{fontFamily: 'SpaceGrotesk_500Medium'}}>
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
                contentContainerStyle={"flex-column"}
            />
            </View>
            
        </View>
    );
}