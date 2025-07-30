import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';

export default function UserTripCard({ trip }) {
  //console.log('UserTripCard received trip:', trip);
  

  let tripData = null;
  try {
    tripData = typeof trip.tripData === 'string' 
      ? JSON.parse(trip.tripData) 
      : trip.tripData;
  } catch (error) {
    console.error("Error parsing tripData in UserTripCard:", error);
  }
  const formattedStartDate = tripData?.startDate 
  ? moment(trip.tripData.startDate).format('MMMM Do YYYY')  // Example: "March 18th 2025"
  : 'Start Date Not Available';

  return (
    <View 
    style={{
         marginTop: 20, 
         display:'flex',
         flexDirection:'row',
         gap:10,
         alignItems:'center'}}>
      <Image 
        source={require('./../../assets/images/Login.jpg')} 
        style={{ width: 100, height: 100,borderRadius:15 }} 
      />
      <View>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:18,
        }}>{tripData?.name || 'Trip Name Not Available'}</Text>
        <Text style={{
            fontFamily:'outfit',
            fontSize:14,
            color:Colors.light.GRAY,
        }}>{formattedStartDate}</Text>
        <Text  style={{
            fontFamily:'outfit',
            fontSize:14,
            color:Colors.light.GRAY,
        }}>Traveling: {tripData?.traveler?.title}</Text>
      </View>
    </View>
  );
}
