import { View, Text, TextInput,StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Colors } from './../../../constants/Colors'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './../../../configs/FirebaseConfig';

export default function SignIn() {
    const router= useRouter();
    const [email, setEmail]=useState();
    const [password,setPassword]=useState();
    const onSignIn=()=>{
      if(!email && !password ){
        ToastAndroid.show('Please Enter Email & Password',ToastAndroid.BOTTOM)
        return;
      }
      
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    if(errorCode=='auth/invalid-credential'){
      ToastAndroid.show("Invalid Credentials",ToastAndroid.LONG)
    }
  });

    }
  return (
    <View style={{
        padding:25,
        paddingTop:50, 
        backgroundColor: Colors.light.WHITE,
        height:'100%'

    }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:30

      }}>Let's Sign You In</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.light.GRAY,
        marginTop: 10

      }}>Welcome Back</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.light.GRAY,
        marginTop:10

      }}>You've Been missed!</Text>

      <View style={{
        marginTop: 50,
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

      <TouchableOpacity onPress={onSignIn} style={{
        padding:18,
        backgroundColor: Colors.light.PRIMARY,
        borderRadius: 15,
        marginTop: 50
      }}>
        <Text style={{
            color:Colors.light.WHITE,
            textAlign:'center'
        }}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>router.replace('auth/sign-up')}
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
        }}>Create Account</Text>
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