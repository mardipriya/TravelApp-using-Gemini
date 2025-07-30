import { useNavigation, useRouter } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, View, TextInput, FlatList, Text, TouchableOpacity, useColorScheme } from 'react-native';
import {CreateTripContext} from './../../context/CreateTripContext'

const HERE_API_KEY = 'Q1IrfddXGz9hArHlKVp6av6DZA6PmQ7agqWjzMa7XWo'; // Replace this with your actual API key

export default function SearchPlace() {

  const navigation = useNavigation();
  const {tripData,setTripData}=useContext(CreateTripContext)
  const router=useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search',
    });
  }, [navigation]);
  useEffect(()=>{
    console.log(tripData);

  }),[tripData]

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Function to fetch autocomplete suggestions
  const searchPlaces = async (text) => {
    setQuery(text);
    if (text.length > 2) {
      try {
        const response = await fetch(
          `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${encodeURIComponent(text)}&apiKey=${HERE_API_KEY}`
        );
        const data = await response.json();
        setResults(data.items || []);
        console.log('Autocomplete Results:', data); // Log autocomplete results
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setResults([]); // Clear results if the query is too short
    }
  };

  // Function to fetch details of the selected place and get map URL
  const selectPlace = async (place) => {
    try {
      const response = await fetch(
        `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(place.title)}&apiKey=${HERE_API_KEY}`
      );
      const data = await response.json();
      console.log('Full Place Data:', data); // Log full response data

      // If place data is available, construct the embedded map URL
      if (data.items && data.items[0]) {
        const details = data.items[0];
        
        // Extract the city and country part
        const city = details.address.city;
        const country = details.address.countryName;

        // Compare city and country with the query
        if (`${city}, ${country}`.toLowerCase() === query.toLowerCase()) {
          console.log('Place Name:', `${city}, ${country}`); // Log just the city and country
        } else {
          console.log('Place Name:', details.title); // Log the full place name if it doesn't match the query
        }

        // Get latitude and longitude of the place
        const { position } = details;
        const latitude = position.lat;
        const longitude = position.lng;

        // Construct the embedded map URL using the latitude and longitude
        const mapUrl = `https://www.here.com/?map=${latitude},${longitude},15`; // Example URL for embedding the map
        setTripData({
          name: `${city}, ${country}`,  // Set the name as city and country
          coordinates: { latitude, longitude },  // Set the coordinates
          url: mapUrl,  // Set the map URL
        });

        router.push('/create-trip/select-traveler')
        console.log('Embedded Map URL:', mapUrl);
      }
    } catch (error) {
      console.error('Error retrieving place details:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20, flex: 1, backgroundColor: '#fff' }}>
        <TextInput
          placeholder="Search for a place"
          value={query}
          onChangeText={searchPlaces}
          style={{
            height: 50,
            borderWidth: 1,
            marginTop: 30,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 10,
          }}
        />
        
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => selectPlace(item)}
              style={{
                padding: 15,
                borderBottomColor: '#ddd',
                borderBottomWidth: 1,
              }}
            >
              <Text>{item.address.city}, {item.address.countryName}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
