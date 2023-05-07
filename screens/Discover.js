import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Attractions, Avatar, Hotels, Restaurants } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer';
import ItemCardContainer from '../components/itemCardContainer';
import { FontAwesome } from '@expo/vector-icons';

const Discover = () => {
    const navigation = useNavigation(); // This is the navigation object

    const [type, setType] = useState("restaurant")

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
        {/** Google places API*/}
        <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg">
            <GooglePlacesAutocomplete
                GooglePlacesDetailsQuery={{fields: "geometry"}}
                placeholder='Search'
                fetchDetails = {true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(details?.geometry?.viewport);
                }}
                query={{
                    key: 'AIzaSyDFS-oC6ysP3FrAOZnVAhHjFZxOOQXWkqE', // need to relace with env
                    language: 'en',
                }}
            />
        </View>

        {/** Menu Container */}
        <ScrollView>
            <View className=" flex-row items-center justify-between px-8 mt-8">
                <MenuContainer
                key={"hotel"}
                title="Hotels"
                imgSrc={Hotels}
                type={type}
                setType={setType}
                />

                <MenuContainer
                key={"attractions"}
                title="Attractions"
                imgSrc={Attractions}
                type={type}
                setType={setType}
                />

                <MenuContainer
                key={"restaurants"}
                title="Restaurants"
                imgSrc={Restaurants}
                type={type}
                setType={setType}
                />
            </View>

            <View>
                <View className = "flex-row items-center justify-between px-4 mt-8">
                    <Text className="text-[#2C7379] text-[28px] font-bold"> Top tips</Text>
                    <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                        <Text className = "text=[#A0C4C7] text-[20px] font-bold"> Explore </Text>
                        <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7"/>
                    </TouchableOpacity>
                </View>

                <View className = "px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                    <ItemCardContainer key={"101"} imageSrc={"https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="} title={"Sample1"} location="Doha"/>
                    <ItemCardContainer key={"102"} imageSrc={"https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"} title={"Sample2"} location="Doha"/>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Discover