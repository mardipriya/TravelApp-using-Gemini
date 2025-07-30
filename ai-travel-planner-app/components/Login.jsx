import { View, Text,Image,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

import { Colors } from '@/constants/Colors'
import { useReducedMotion } from 'react-native-reanimated'
import { useRouter } from 'expo-router'

export default function Login() {
    const router=useRouter();
  return (
    <View>
        <Image source={require('./../assets/images/Login.jpg')} style={{ width: '100%', height: 500 }} />
        <View style={styles.container}>
            <Text style={{
                fontSize:28,
                fontFamily:'outfit-bold',
                textAlign: 'center',
                marginTop:10
            }}>AI Travel Planner</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize:  17,
                textAlign:'center', 
                color:Colors.light.GRAY,
                marginTop:20
            }

            }>
                Discover your next adventure effortlessly. Personalized itineraries at your fingerprints. Travel smarter with AI-driven insights
            </Text>
            <TouchableOpacity style={styles.button}
            onPress={()=>router.push('auth/sign-in')}>
                <Text style={{
                    color:Colors.light.WHITE,
                    textAlign: 'center',
                    fontFamily:'outfit',
                    fontSize: 20

                }} >Get Started</Text>
            </TouchableOpacity>
        </View>

      
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.light.WHITE,
        marginTop: -20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding: 25,
        height:'100%'
    },
    button:{
        padding:15,
        backgroundColor:Colors.light.PRIMARY,
        borderRadius: 99,
        marginTop: '25%'

    }

})