import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from './../../constants/Colors'

export default function TabLayout() {
  return (
   <Tabs screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: Colors.light.PRIMARY

   }}>
    <Tabs.Screen options={{
      tabBarLabel:'My Trip',
      tabBarIcon:({color})=> <Ionicons name="location-sharp" size={24} color={color} />
    }} name="mytrip"/>
    <Tabs.Screen options={{
      tabBarLabel:'Discover',
      tabBarIcon:({color})=> <Ionicons name="globe-sharp" size={24} color={color} />
    }} name="discover"/>
    <Tabs.Screen options={{
      tabBarLabel:'My Profile',
      tabBarIcon:({color})=> <Ionicons name="people-circle" size={24} color={color} />
    }} name="profile"/>

   </Tabs>
  )
}