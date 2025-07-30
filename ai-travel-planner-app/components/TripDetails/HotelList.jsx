import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'

export default function HotelList({hotelList}) {

  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20
      }}>🏨 Hotel Recommendation</Text>

      <FlatList
      style={{
        marginTop:8
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={hotelList}
      renderItem={({item,index})=>(
        <View style={{
            marginRight:20,
            width:180,
        }}>

    <Image 
        source={{ uri: item?.imageUrl }} 
        style={{
            width: '100%',
            height: 330,
            resizeMode: 'cover', // 'resizeMode' is used instead of 'objectFit'
        }}
    />

           {/* <Image 
           style={{
            width:180,
            height:120,
            borderRadius:15
           }}
           source={require('./../../assets/images/Login.jpg')}/> */}
           <View style={{
            padding:5,
           }}>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:17,
            }}>{item.hotelName}</Text>
            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
                <Text style={{
                    fontFamily:'outfit'
                }}>⭐ {item.rating}</Text>

                <Text style={{
                    fontFamily:'outfit'
                }}>💵 {item.price} {item.currency}</Text>
            </View>
           </View>
        </View>



      )}/>

      
    </View>
  )
}

