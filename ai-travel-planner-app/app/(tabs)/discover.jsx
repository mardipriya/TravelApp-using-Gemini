import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Discover() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <Ionicons name="search" size={24} color={Colors.light.PRIMARY} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.subtitle}>Explore Amazing Destinations</Text>
        <Text style={styles.description}>
          Find your next adventure with AI-powered travel recommendations
        </Text>
        
        <View style={styles.featureCard}>
          <Ionicons name="globe" size={40} color={Colors.light.PRIMARY} />
          <Text style={styles.featureTitle}>AI-Powered Planning</Text>
          <Text style={styles.featureText}>
            Get personalized travel itineraries created by advanced AI
          </Text>
        </View>
        
        <View style={styles.featureCard}>
          <Ionicons name="star" size={40} color={Colors.light.PRIMARY} />
          <Text style={styles.featureTitle}>Curated Experiences</Text>
          <Text style={styles.featureText}>
            Discover hidden gems and local recommendations
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.WHITE,
    paddingTop: 55,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 30,
    color: Colors.light.PRIMARY,
  },
  content: {
    paddingHorizontal: 25,
  },
  subtitle: {
    fontFamily: 'outfit-bold',
    fontSize: 24,
    color: Colors.light.PRIMARY,
    marginBottom: 10,
  },
  description: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: Colors.light.GRAY,
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: Colors.light.LIGHT_BLUE,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  featureTitle: {
    fontFamily: 'outfit-bold',
    fontSize: 18,
    color: Colors.light.PRIMARY,
    marginTop: 10,
    marginBottom: 5,
  },
  featureText: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: Colors.light.GRAY,
    textAlign: 'center',
  },
})