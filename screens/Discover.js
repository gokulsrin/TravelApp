import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Avatar } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Discover = () => {
    const navigation = useNavigation(); // This is the navigation object
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false, 
        });
    }, [])
  return (

    <SafeAreaView className={"flex-1 bg-white relative"}>
        {/** Main view header */}
        <View className="flex-row items-center justify-between px-8">
            <View>
                <Text className="text-[40px] color-[#0B646B] font-bold">Discover </Text>
                <Text className="color-[#527283] text-[32px]">the beauty today </Text>
            </View>

            <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
                <Image 
                source={Avatar}
                className="w-full h-full rounded-md object-cover shadow-lg"
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Discover