import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router=useRouter();

  const onDateSelectionContinue = () => {
    if (!(startDate && endDate)) {
      ToastAndroid.show('Please Select Start and End Date', ToastAndroid.LONG);
      return;
    }
    const totalNoDays = endDate.diff(startDate, 'days');
    console.log(totalNoDays + 1);
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoDays: totalNoDays + 1,
    });
    router.push('create-trip/select-budget')
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    });
  }, []);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type == 'START_DATE') {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.light.WHITE,
      height: '100%'
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
      }}>Travel Dates</Text>
      <View style={{
        marginTop: 25,
      }}>
        <CalendarPicker 
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.light.PRIMARY
          }}
          selectedDayTextStyle={{
            color: Colors.light.WHITE
          }}
        />
      </View>
      <TouchableOpacity 
        onPress={onDateSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.light.PRIMARY,
          borderRadius: 15,
          marginTop: 35,
        }}
      >
        <Text style={{
          textAlign: 'center',
          fontFamily: 'outfit-medium',
          fontSize: 17,
          color: Colors.light.WHITE
        }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}