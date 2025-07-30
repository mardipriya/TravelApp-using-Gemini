import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native'; 
import {CreateTripContext} from '../context/CreateTripContext'
import { useState } from 'react';

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });

  // Show a loading screen if fonts aren't loaded
  if (!fontsLoaded) {
    if (error) {
      console.error('Font loading error:', error);
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }
  const [tripData,setTripData]=useState([]);

  return (
    <CreateTripContext.Provider value={{tripData,setTripData}} >
       <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>

    </CreateTripContext.Provider>
   
  );
}