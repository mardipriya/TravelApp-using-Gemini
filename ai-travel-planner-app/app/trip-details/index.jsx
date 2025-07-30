import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';

export default function TripDetails() {
    const navigation = useNavigation();
    const { trip } = useLocalSearchParams();
    const [tripDetails, setTripDetails] = useState(null);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });

        if (trip) {
            try {
                setTripDetails(JSON.parse(trip)); // Ensure proper parsing
            } catch (error) {
                console.error("Error parsing trip data:", error);
            }
        }
    }, [trip]);

    if (!tripDetails) return <Text>Loading...</Text>;

    // Ensure tripData is correctly parsed
    const tripData = tripDetails?.tripData 
        ? (typeof tripDetails.tripData === 'string' 
            ? JSON.parse(tripDetails.tripData) 
            : tripDetails.tripData)
        : {};

    const tripPlan = tripDetails?.tripPlan 
        ? (typeof tripDetails.tripPlan === 'string' 
            ? JSON.parse(tripDetails.tripPlan) 
            : tripDetails.tripPlan)
        : {};

    const flightData = tripPlan?.flights || [];
    const hotelList = tripPlan?.hotels || [];
    const details = tripPlan?.itinerary || [];

    //console.log("TripPlan:", tripPlan);
    //console.log("Flights:", flightData);
    console.log("Details:", details);

    // Format start and end dates
    const formattedStartDate = tripData?.startDate 
        ? moment(tripData.startDate).format('MMMM Do YYYY')  
        : 'Start Date Not Available';

    const formattedEndDate = tripData?.endDate 
        ? moment(tripData.endDate).format('MMMM Do YYYY')  
        : 'End Date Not Available';

    return tripDetails && (
        <ScrollView>
            <Image 
                source={require('./../../assets/images/Login.jpg')}
                style={{
                    width: '100%',
                    height: 330,
                    objectFit: 'cover',
                }}
            />
            <View style={{
                padding: 15,
                backgroundColor: Colors.light.WHITE,
                height: '100%',
                marginTop: -30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
            }}>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 25
                }}>{tripData?.name || "Trip Name Not Available"}</Text>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 5,
                    marginTop: 5,
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'outfit',
                        color: Colors.light.GRAY,
                    }}>{formattedStartDate}</Text>

                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'outfit',
                        color: Colors.light.GRAY,
                    }}> - {formattedEndDate}</Text>
                </View>

                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 17,
                    color: Colors.light.GRAY,
                }}>🚌 {tripData?.traveler?.title || "Traveler Info Not Available"}</Text>

                {/* Flight Info Component */}
                <FlightInfo flightData={flightData} />
                <HotelList hotelList={hotelList}/>
                <PlannedTrip details={details}/>
            </View>

            {/* <View></View> */}
        </ScrollView>
    );
}

