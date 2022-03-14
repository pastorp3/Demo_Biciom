import React from 'react';
import { StyleSheet, Text, View, Pressable, Button} from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
const AddTrip = ({route, navigation}) => {
    const user = route.params.user;
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        fetch('https://infinite-sands-31487.herokuapp.com/trips')
        .then(response => response.json())
        .then(data => setTrips(data));
    }, [trips])

    const getTrip = (id) => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ guide_id: user.id })
          }
    
          fetch(`https://infinite-sands-31487.herokuapp.com/trips/${id}`, requestOptions)
    
    }


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Viajes</Text>
        {
            trips.map(  trip => 
            <View key={trip.id}style={styles.tripCard}>
                <View style={styles.flex}>
                    <Text style={styles.text}>Base: {trip.place}</Text>
                    <Text style={styles.text}>Cajero: {trip.by.name} {trip.by.lastName}</Text>
                </View>
                <View style={styles.flex}>
                    <Text style={styles.text}>Pasajeros: {trip.passangers}</Text>
                    <Text style={styles.text}>Precio Total: {trip.total}</Text>
                </View>
                <Text style={styles.text}>Guia: {trip.guide ? trip.guide.name : "sin asignar"}</Text>
                {
                    trip.guide ? null :  <Button color="green" title="Tomar" onPress={() => getTrip(trip.id)} />
                }
    
            </View>
            )
        }
      </View>
    );
}

const styles = StyleSheet.create({
    tripCard: {
        width: '90%',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        marginRight: 20
    },
    flex: {
        alignItems: "center",
        justifyContent: "center", 
        flexDirection: "row"
    }
})

export default AddTrip;