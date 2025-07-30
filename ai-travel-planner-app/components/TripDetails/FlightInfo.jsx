import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';

export default function FlightInfo({flightData}) {
    const hasDeparture = flightData?.departure;
    const hasReturn = flightData?.return;
  return (
    <View style={{
        marginTop:20,
        borderColor:Colors.light.LIGHTGRAY,
        padding:10,
        borderRadius:15,
        borderWidth:1,
    }}>
    
    <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }}>
    <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20
      }}>✈️Flights</Text>

    <TouchableOpacity style={{
        backgroundColor:Colors.light.PRIMARY,
        padding:5,
        width:100,
        borderRadius:7,
        marginTop:7

      }}>
        <Text style={{
            textAlign:'center',
            fontFamily:'outfit',
            color: Colors.light.WHITE,
        }}>Book Here</Text>
      </TouchableOpacity>
    </View>
      
      <Text style={{
        fontFamily:'outfit',
        fontSize:17,
        marginTop:7
      }}>Airline: {flightData.departure.airline} </Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:17
      }}>Price: {flightData.departure.flightPrice} {flightData.departure.currency}</Text>
      
    </View>
  )
}

// import { View, Text } from 'react-native';
// import React from 'react';

// export default function FlightInfo({ flightData }) {
//     // Check if we have departure flight data
//     const hasDeparture = flightData?.departure;
//     const hasReturn = flightData?.return;

//     if (!hasDeparture && !hasReturn) {
//         return <Text>No flight information available</Text>;
//     }

//     return (
//         <View style={{ marginTop: 15 }}>
//             <Text style={{
//                 fontFamily: 'outfit-bold',
//                 fontSize: 20,
//                 marginBottom: 10
//             }}>Flight Information</Text>

//             {hasDeparture && (
//                 <View style={{ marginBottom: 15 }}>
//                     <Text style={{ fontFamily: 'outfit-bold' }}>Departure Flight</Text>
//                     <Text>Airline: {flightData.departure.airline}</Text>
//                     <Text>Flight: {flightData.departure.flightNumber}</Text>
//                     <Text>From: {flightData.departure.origin} To: {flightData.departure.destination}</Text>
//                     <Text>Depart: {flightData.departure.departureTime}</Text>
//                     <Text>Arrive: {flightData.departure.arrivalTime}</Text>
//                     <Text>Price: {flightData.departure.flightPrice} {flightData.departure.currency}</Text>
//                 </View>
//             )}

//             {hasReturn && (
//                 <View>
//                     <Text style={{ fontFamily: 'outfit-bold' }}>Return Flight</Text>
//                     <Text>Airline: {flightData.return.airline}</Text>
//                     <Text>Flight: {flightData.return.flightNumber}</Text>
//                     <Text>From: {flightData.return.origin} To: {flightData.return.destination}</Text>
//                     <Text>Depart: {flightData.return.departureTime}</Text>
//                     <Text>Arrive: {flightData.return.arrivalTime}</Text>
//                     <Text>Price: {flightData.return.flightPrice} {flightData.return.currency}</Text>
//                 </View>
//             )}
//         </View>
//     );
// }