import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PlannedTrip({ details }) {
  console.log(details);

  // Get the day keys and sort them in descending order based on the number
  const sortedDays = Object.keys(details).sort((a, b) => {
    const dayA = parseInt(a.replace('day', ''), 10); // Extract number from "dayX"
    const dayB = parseInt(b.replace('day', ''), 10); // Extract number from "dayX"
    return dayA - dayB; // Sort in descending order (day3, day2, day1)
  });

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>🏕️ PlannedTrip</Text>
      {sortedDays.map((day) => (
        <View key={day}>
          <Text
            style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
              marginTop: 20,
            }}
          >
            {day.charAt(0).toUpperCase()+day.slice(1,3)+" "+day.slice(3)}
          </Text>
          {Object.entries(details[day]).map(([timeOfDay, placeDetails]) => {
            if (timeOfDay === 'theme') return null; // Skip 'theme' key

            return (
              <View
                style={{
                  padding: 5,
                  backgroundColor: Colors.light.LIGHT_BLUE,
                  marginTop: 20,
                }}
                key={timeOfDay}
              >
                <Image
                  style={{
                    width: '100%',
                    height: 120,
                    borderRadius: 15,
                  }}
                  source={require('./../../assets/images/Login.jpg')}
                />
                <View style={{ marginTop: 5 }}>
                  <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>
                    {placeDetails.placeName}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'outfit',
                      fontSize: 17,
                      color: Colors.light.GRAY,
                    }}
                  >
                    {placeDetails.placeDetails || 'Details not available'}
                  </Text>
                  <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between'
                  }}>
                  <View>
                  <Text
                    style={{
                      fontFamily: 'outfit',
                      fontSize: 17,
                      marginTop: 5,
                    }}
                  >
                    🎟️ Ticket Price:{' '}
                    <Text style={{ fontFamily: 'outfit-bold' }}>
                      {placeDetails.ticketPricing
                        ? Object.entries(placeDetails.ticketPricing)
                            .filter(([key]) => key !== 'currency')
                            .map(([key, value]) => `${value} ${placeDetails.ticketPricing.currency}`)
                            .join(', ')
                        : 'Not Available'}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'outfit',
                      fontSize: 17,
                    }}
                  >
                    ⏱️ Time to Travel:{' '}
                    <Text style={{ fontFamily: 'outfit-bold' }}>
                      {placeDetails?.travelTime || 'Not Available'}
                    </Text>
                  </Text>
                  </View>
                    {/* <TouchableOpacity style={{
                        backgroundColor:Colors.light.PRIMARY,
                        padding:8,
                        borderRadius:7
                    }}><Ionicons name="navigate" size={13} color="white" /></TouchableOpacity> */}
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}