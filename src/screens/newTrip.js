import { StyleSheet, Text, View, Pressable, Button, Picker, TextInput } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
const newTrip = ({route, navigation}) => {
    const user = route.params.user;
    console.log(user);
    const [selectedBase, setBase] = useState('Catedral');
    const [passangers, setPassangers] = useState(0)

    const newTrip = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ place: selectedBase, passangers: parseInt(passangers), total: 0, user_id: user.id})
          }
    
          fetch('https://infinite-sands-31487.herokuapp.com/trips', requestOptions)
            .then(response => response.json())
            navigation.navigate('AddTrip', {
                user: user
              });
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Nuevo Viaje</Text>
        <Picker
            selectedValue={selectedBase}
            style={inputStyles.input}
            onValueChange={(itemValue, itemIndex) => setBase(itemValue)}
        >
            <Picker.Item label="Catedral" value="Catedral" />
            <Picker.Item label="Ciclovia" value="Ciclovia" />
        </Picker>
        <TextInput placeholder='Pasajeros' keyboardType="number-pad" style={inputStyles.input} onChangeText={e => setPassangers(e)}/>
        <Button color="blue" title="Guardar" onPress={newTrip} />
      </View>
    );
}

const inputStyles = StyleSheet.create({
    input: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderColor: 'black'
    }
})



export default newTrip;