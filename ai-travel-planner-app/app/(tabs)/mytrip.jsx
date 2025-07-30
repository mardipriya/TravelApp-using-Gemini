import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTrip from './../../components/MyTrips/StartNewTrip';
import {collection, getDocs, query,where} from 'firebase/firestore';
import {auth, db} from '././../../configs/FirebaseConfig'

import UserList from '../../components/MyTrips/UserList';
export default function MyTrip() {
  const [userTrips, setUserTrips]=useState([]);
  const[loading,setLoading]=useState(false);
  const user=auth.currentUser
  useEffect(()=>{
    user&&GetMyTrips()

  },[user])
  const GetMyTrips=async()=>{
    setUserTrips([]);
    setLoading(true);
    const q=query(collection(db,'UserTrips'),where('userEmail','==',user.email))
    const querySnapshot= await getDocs(q)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev=>[doc.data()])
      console.log('Fetched Succesfully')
    });
    setLoading(false);
    
  }
  return (
    <ScrollView style={{
      padding:25,
      paddingTop:55,
      backgroundColor: Colors.light.WHITE,
      height:'100%'
    }}>
      
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignContent: 'center',
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:30
        }}>My Trip</Text>
        <Ionicons name="add-circle" size={50} color="black" />

      </View>
      {loading&&<ActivityIndicator size={'large'} color={Colors.light.PRIMARY}/>}
      {userTrips?.length==0?
         <StartNewTrip/>
         :<UserList userTrips={userTrips}/>
      }
      
    </ScrollView>
  )
}

