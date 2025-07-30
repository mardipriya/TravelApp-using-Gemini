import { View, Text,Image, Animated } from 'react-native'
import React,{useContext, useEffect, useState} from 'react'
import { Colors } from '../../constants/Colors'
import {CreateTripContext} from './../../context/CreateTripContext';
import { Ai_PROMPT } from '../../constants/Options';
import { useRouter } from 'expo-router';
import { db, auth } from '././../../configs/FirebaseConfig'; // Correct import (db instead of auth for database)
import { doc, setDoc } from 'firebase/firestore';
import { chatSession } from '../../configs/AIModel';


export default function GenerateTrip() {
    const {tripData,setTripData}=useContext(CreateTripContext);
    const [loading,setLoading]=useState(false);
    const router=useRouter();
    const user=auth.currentUser;
    
    useEffect(() => {
      
          GenerateAiTrip();
      
  }, []);
  
    const GenerateAiTrip=async()=>{
        setLoading(true);
        const FINAL_PROMPT=Ai_PROMPT
        .replace('{location}',tripData?.name)
        .replace('{totalDays}',tripData.totalNoDays)
        .replace('{totalNights}',tripData.totalNoDays-1 )
        .replace('{traveler}',tripData?.traveler?.title)
        .replace('{budget}',tripData.budget)
        .replace('{totalDays}',tripData.totalNoDays)
        .replace('{totalNights}',tripData.totalNoDays-1 );

        console.log(FINAL_PROMPT);
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        const tripResponse=JSON.parse(result.response.text());
        setLoading(false)
        console.log("Current User:", user);
        // if (!user) {
        //     console.error("User not authenticated! Redirecting to login...");
        //     return;
        //   }
          const docId = Date.now().toString();
          const result_=await setDoc(doc(db, "UserTrips", docId), {
            userEmail: user.email,
            tripPlan: tripResponse,
            tripData: JSON.stringify(tripData),
            docId:docId,
          });
         
          
            router.push('(tabs)/mytrip');
          
        //router.push('(tabs)/mytrip');

    
    }
  return (
    <View style={{
        padding:25,
        PaddingTop:75,
        backgroundColor:Colors.light.WHITE,
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        textAlign:'center',
      }}>Please Wait...</Text>

    <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            textAlign:'center',
            marginTop:40,
        }}>We are working to generate your dream trip</Text>

        <Animated.Image source={require('./../../assets/images/Air.gif')}
        style={{
            width:'100%',
            height:200,
            objectFit:'contain'
        }}/>
        <Text style={{
            fontFamily:'outfit',
            color:Colors.light.GRAY,
            fontSize:20,
            textAlign:'center'
        }}>Do not go back</Text>
    </View> 
  )
}