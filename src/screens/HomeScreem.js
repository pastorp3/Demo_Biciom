import { StyleSheet, Text, View, Pressable } from 'react-native';
const HomeScreen = ({route, navigation}) => {
    const user = route.params.user[0];
    let ButonOption = "Agregar Nuevo Viaje";
    if (user.userType == 1) ButonOption = "Ver Viajes"
    const handleButton1 = () => {
        if (user.userType == 0) {
            navigation.navigate('AddTrip', {
                user: user
              });
        } else {
            navigation.navigate('TripsScreen', {
                user: user
              });
        }
    }

    const handleMyTrips = () => {
        navigation.navigate('MyTripsScreen', {
            user: user
          });
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{user.name}  {user.lastName}</Text>
        <Pressable  style={styles.button} onPress={handleButton1}>
            <Text style={styles.text}>{ButonOption}</Text>
        </Pressable>
        {user.userType == 1 ? 
            <Pressable  style={styles.button} onPress={handleMyTrips}>
                <Text style={styles.text}>Mis Viajes</Text>
            </Pressable>
        : null}
      </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5
    },
    text: {
        color: 'white'
    }
})

export default HomeScreen;