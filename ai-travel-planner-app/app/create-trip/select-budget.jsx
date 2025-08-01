import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext,useEffect, useState } from 'react'
import { useNavigation,Link, useRouter } from 'expo-router'
import { SelectBudgetOptions } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { Colors } from '../../constants/Colors';
import {CreateTripContext} from './../../context/CreateTripContext';
export default function SelectBudget() {
  const navigation=useNavigation();
  const [selectedOption,setSelectedOption]=useState();
  const {tripData,setTripData}=useContext(CreateTripContext)
  const router=useRouter();
  
  useEffect(()=>{
    navigation.setOptions({
        headerShown: true,
        headerTransparent:true,
        headerTitle:''
    })
  },[]);

  useEffect(()=>{
    selectedOption&&setTripData({
      ...tripData,
      budget:selectedOption?.title,
    })


  },[selectedOption]);

  const onClickContinue=()=>{
    if(!selectedOption){
      ToastAndroid.show('Please Your Option', ToastAndroid.LONG)
      return;
    }
    router.push('/create-trip/review-trip');
    
  }
  return (
    <View style={
        {
            paddingTop:75,
            padding:25,
            backgroundColor:Colors.light.WHITE,
            height:'100%',

        }
    }>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        marginTop:20
      }}>Budget</Text>

      <View style={{
        marginTop:20,
      }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20
        }}>Choose the Budget for your Trip</Text>
        <FlatList
           data={SelectBudgetOptions}
           renderItem={({item,index})=>(
            <TouchableOpacity 
            onPress={()=>setSelectedOption(item)}
            style={{
                marginVertical:10
            }}>

                <OptionCard option={item} selectedOption={selectedOption}/>
            </TouchableOpacity>
           )}
        />
      </View>
      <TouchableOpacity 
      onPress={()=>onClickContinue()}
      style={{
        padding:15,
        backgroundColor:Colors.light.PRIMARY,
        borderRadius:15,
        marginTop:20,
      }}>
       
        <Text style={{
          textAlign:'center',
          fontFamily:'outfit-medium',
          fontSize:17,
          color:Colors.light.WHITE
        }}>Continue</Text>
        
      </TouchableOpacity>
    </View>
  )
}
