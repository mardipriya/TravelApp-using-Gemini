import { View, Text,TouchableOpacity  } from 'react-native'
import React, { useContext,useEffect } from 'react'
import { useNavigation, useRouter} from 'expo-router';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {CreateTripContext} from './../../context/CreateTripContext';
import moment from 'moment'
import { useRoute } from '@react-navigation/native';

export default function ReviewTrip() {
    const navigation = useNavigation();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const router=useRouter()
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })

    },[])
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor: Colors.light.WHITE,
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
      }}>Review Your Trip</Text>

      <View style={{
         marginTop:40,
      }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20,
        }}>Before Generating Your Trip, Please Review your selection </Text>
         {/*Destination Info*/}
        <View style={{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
          {/*<Ionicons name="location-sharp" size={34} color="black" />*/}
          <Text style={{
            fontSize:30,
          }}>📍</Text>
          <View>
            <Text style={{
                fontFamily:'outfit', 
                fontSize:20,
                color: Colors.light.GRAY,
            }}>Destination</Text>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize:20
            }}>{tripData?.name}</Text>
          </View>
        </View>

         {/*Date Selected Info*/}
        <View style={{
            marginTop:25,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
          {/*<Ionicons name="location-sharp" size={34} color="black" />*/}
          <Text style={{
            fontSize:30,
          }}>📆</Text>
          <View>
            <Text style={{
                fontFamily:'outfit', 
                fontSize:20,
                color: Colors.light.GRAY,
            }}>Travel Date</Text>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize:20
            }}>{moment(tripData?.startDate).format('DD MMM')+"To"+ moment(tripData?.endDate).format('DD MMM')+"  "}
            ({tripData.totalNoDays} days)</Text>
          </View>


          
        </View>

        {/*Family Info*/}
        <View style={{
            marginTop:25,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
          {/*<Ionicons name="location-sharp" size={34} color="black" />*/}
          <Text style={{
            fontSize:30,
          }}>🚌</Text>
          <View>
            <Text style={{
                fontFamily:'outfit', 
                fontSize:20,
                color: Colors.light.GRAY,
            }}>Who is Traveling?</Text>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize:20
            }}>{tripData?.traveler?.title}</Text>
          </View>


          
        </View>

        {/*Budget Info*/}
        <View style={{
            marginTop:25,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
          {/*<Ionicons name="location-sharp" size={34} color="black" />*/}
          <Text style={{
            fontSize:30,
          }}>💰</Text>
          <View>
            <Text style={{
                fontFamily:'outfit', 
                fontSize:20,
                color: Colors.light.GRAY,
            }}>Budget</Text>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize:20
            }}>{tripData?. budget}</Text>
          </View>


          
        </View>

    <TouchableOpacity 
      onPress={()=>router.push('/create-trip/generate-trip')}
      style={{
        padding:15,
        backgroundColor:Colors.light.PRIMARY,
        borderRadius:15,
        marginTop:80,
      }}>
       
        <Text style={{
          textAlign:'center',
          fontFamily:'outfit-medium',
          fontSize:17,
          color:Colors.light.WHITE
        }}>Build My Trip</Text>
        
      </TouchableOpacity>
      </View>
    </View>
  )
}