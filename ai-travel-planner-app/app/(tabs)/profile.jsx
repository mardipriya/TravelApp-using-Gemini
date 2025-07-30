import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import { auth } from '../../configs/FirebaseConfig'

export default function Profile() {
  const user = auth.currentUser

  const handleSignOut = async () => {
    try {
      await auth.signOut()
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person-circle" size={80} color={Colors.light.PRIMARY} />
          </View>
          <Text style={styles.userName}>{user?.email || 'Guest User'}</Text>
          <Text style={styles.userEmail}>{user?.email || 'Not signed in'}</Text>
        </View>
        
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="settings" size={24} color={Colors.light.PRIMARY} />
            <Text style={styles.menuText}>Settings</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.light.GRAY} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="help-circle" size={24} color={Colors.light.PRIMARY} />
            <Text style={styles.menuText}>Help & Support</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.light.GRAY} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="information-circle" size={24} color={Colors.light.PRIMARY} />
            <Text style={styles.menuText}>About</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.light.GRAY} />
          </TouchableOpacity>
        </View>
        
        {user && (
          <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
            <Ionicons name="log-out" size={24} color={Colors.light.WHITE} />
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        )}
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
  profileCard: {
    backgroundColor: Colors.light.LIGHT_BLUE,
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  userName: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    color: Colors.light.PRIMARY,
    marginBottom: 5,
  },
  userEmail: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: Colors.light.GRAY,
  },
  menuSection: {
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.LIGHTGRAY,
  },
  menuText: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: Colors.light.PRIMARY,
    flex: 1,
    marginLeft: 15,
  },
  signOutButton: {
    backgroundColor: Colors.light.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  signOutText: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: Colors.light.WHITE,
    marginLeft: 10,
  },
})