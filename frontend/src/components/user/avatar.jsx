import { Image, View } from "react-native"

export const Avatar = ({userId, focused}) => {
    //give me a gravatar

    return (
        <View className='w-full h-full'>
            <Image 
                className={`w-full h-full rounded-full border-2 ${focused ? 'border-primary' : 'border-[#121212]/[0.29]'}`}
                source={{uri: `https://img.freepik.com/free-photo/happy-man-standing-beach_107420-9868.jpg?size=626&ext=jpg&ga=GA1.1.1553799837.1700226165&semt=sphttps://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg`}}
            />
        </View>
    )
}