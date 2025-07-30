import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext,useEffect , useState} from 'react';
import { Link, useNavigation } from 'expo-router';
import { Colors } from './../../constants/Colors';
import { SelectTravelerList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import {CreateTripContext} from './../../context/CreateTripContext';

export default function SelectTraveler() {
  const navigation = useNavigation();
  const [selectedTraveler,setSelectedTraveler]=useState();
  const {tripData,setTripData}=useContext(CreateTripContext)

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  useEffect(()=>{
    setTripData({...tripData,
      traveler:selectedTraveler
    })


  },[selectedTraveler])

  useEffect(()=>{
    console.log(tripData)

  },[tripData])

  return (
    <View style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor: Colors.light.WHITE,
      height: '100%',
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        marginTop: 20,
      }}>Who's Traveling</Text>

      <View>
        <Text style={{
          fontFamily: 'outfit-bold',
          marginTop: 20,
          fontSize: 25,
        }}>Choose Your Traveler's</Text>

        <FlatList style={{
          marginTop: 15
        }}
          data={SelectTravelerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity 
            onPress={()=>setSelectedTraveler(item)}
            style={{
              marginVertical: 10,
            }}>
              {/* Ensure the OptionCard component wraps any text with the <Text> component */}
              <OptionCard option={item} selectedOption={selectedTraveler} />
            </TouchableOpacity>
          )}
         //each item has a unique key
        />
      </View>
      <TouchableOpacity style={{
        padding:15,
        backgroundColor:Colors.light.PRIMARY,
        borderRadius:15,
        marginTop:20,
      }}>
        <Link href={'/create-trip/select-dates'}>
        <Text style={{
          textAlign:'center',
          fontFamily:'outfit-medium',
          fontSize:17,
          color:Colors.light.WHITE
        }}>Continue</Text>
        </Link>
      </TouchableOpacity>
     
    </View>
  );
}
