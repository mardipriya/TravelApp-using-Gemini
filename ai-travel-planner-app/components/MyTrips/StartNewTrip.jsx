import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors';

export default function StartNewTrip() {
    const router=useRouter();
  return (
    <View style={{
        padding:20,
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        gap:25
    }}>
     <Ionicons name="location-sharp" size={30} color="black" />
     <Text style={{
        fontFamily:'outfit-medium',
        fontSize:25,

     }}>
        No Trips Planned Yet
     </Text>
     <Text style={{
        fontSize:20,
        fontFamily:'outfit',
        textAlign:'center',
        color: Colors.light.GRAY
     }}> 
     Looks like its time to plan a new travel experience! Get Started below

     </Text>
     <TouchableOpacity onPress={()=>router.push('/create-trip/search-place')} style={{
        padding: 15,
        backgroundColor:Colors.light.PRIMARY,
        borderRadius:15,
        paddingHorizontal:30
     }}>
        <Text style={{
            color: Colors.light.WHITE,
            fontFamily:'outfut-medium',
            fontSize:18
            
        }}>Start a New Trip</Text>
     </TouchableOpacity>
    </View>

  )
}