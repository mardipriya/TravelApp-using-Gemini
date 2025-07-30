import { View, Text,StyleSheet,TextInput,TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Colors } from './../../../constants/Colors'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './../../../configs/FirebaseConfig';

export default function SignUp() {
    const router = useRouter();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [FullName,setFullName]=useState();
    const OnCreateAccount=()=>{
        if(!email && !password && !FullName){
            ToastAndroid.show('Please Enter All details',ToastAndroid.BOTTOM)
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    // ..
  });

    }
  return (
    <View style={{
        padding:25,
        paddingTop: 50,
        backgroundColor: Colors.light.WHITE,
        height:'100%'
    }}>
     <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop: 10
      }}>Create New Account</Text>

    <View style={{
        marginTop: 27,
      }}>
        <Text style={{
            fontFamily:'outfit'
        }}>Full Name</Text>
        <TextInput style={styles.input} placeholder='Enter FullName'
        onChangeText={(value)=>setFullName(value)}></TextInput>
      </View>
      
      <View style={{
        marginTop: 20,
      }}>
        <Text style={{
            fontFamily:'outfit'
        }}>Email</Text>
        <TextInput style={styles.input} placeholder='Enter Email'
         onChangeText={(value)=>setEmail(value)}></TextInput>
      </View>
      
      <View style={{
        marginTop: 20,
      }}>
        <Text style={{
            fontFamily:'outfit'
        }}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Password'
        onChangeText={(value)=>setPassword(value)}></TextInput>
      </View>

      <TouchableOpacity onPress={OnCreateAccount} style={{
        padding:18,
        backgroundColor: Colors.light.PRIMARY,
        borderRadius: 15,
        marginTop: 50
      }}>
        <Text style={{
            color:Colors.light.WHITE,
            textAlign:'center'
        }}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>router.replace('auth/sign-in')}
      style={{
        padding:18,
        backgroundColor: Colors.light.WHITE,
        borderRadius: 15,
        borderWidth:1,
        marginTop: 20
      }}>
        <Text style={{
            color:Colors.light.PRIMARY,
            textAlign:'center'
        }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        fontFamily:'outfit'
    }
})