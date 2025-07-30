import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import UserTripCard from './UserTripCard';
import { useRouter } from 'expo-router';

export default function UserList({userTrips}) {
  //console.log(userTrips);
  const router=useRouter();
  const tripData = JSON.parse(userTrips[0]?.tripData);

  //const tripData = userTrips[0]?.tripData ?? null;
  const formattedStartDate = tripData?.startDate 
  ? moment(userTrips[0]?.tripData.startDate).format('MMMM Do YYYY')  // Example: "March 18th 2025"
  : 'Start Date Not Available';
  return (
    <View>
      <View style={{
        marginTop:20
      }}> 
        <Image source={require('./../../assets/images/Login.jpg')}
           style={{
            width:'100%',
            height:240,
            objectFit:'cover',
            borderRadius:15
           }}
        />
      </View>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
        }}>{tripData?.name}</Text> 
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:5,
        }}>
        <Text style={{
            fontSize:17,
            fontFamily:'outfit',
            color:Colors.light.GRAY,
        }}>{formattedStartDate}</Text>

        <Text style={{
            fontFamily:'outfit',
            fontSize:17,
            color:Colors.light.GRAY,

        }}>🚌{tripData?.traveler?.title}</Text>
        {/* <Text>{tripData?.budget}</Text> */}
        </View>
        <TouchableOpacity onPress={()=>router.push({pathname:'/trip-details',params:{
            trip:JSON.stringify(userTrips[0])
        }})} style={{
            backgroundColor:Colors.light.PRIMARY,
            padding:15,
            borderRadius:15,
            marginTop:10
        }}>
            <Text style={{
                color:Colors.light.WHITE,
                textAlign:'center',
                fontFamily:'outfit-medium',
                fontSize:15,
            }}>See Your Plan</Text>
        </TouchableOpacity>

        {userTrips.map((trip,index)=>(
            <UserTripCard trip={trip} key={index}/>

        ))}
      </View>
    </View>
  )
}
