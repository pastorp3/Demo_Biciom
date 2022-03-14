import { StyleSheet, Text, View, Button, TextInput, Pressable, Picker } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';

const Register = ({navigation}) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');
    const [selectedType, setType] = useState('Guia');
    const handleName = (event) => {
      setName(event)
    }
    const handleLastName = (event) => {
        setLastName(event)
      }
    const handlePassword = (e) => {
      setPassword(e)
    }

    const submit = () => {

        let userType = 'guides';
        if( selectedType != 'Guia') userType = 'users';

        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, password: password, lastName: lastName })
        }

        fetch(`https://infinite-sands-31487.herokuapp.com/${userType}`, requestOptions)
        .then(response => response.json())
        .then(data => setUser(data));

        navigation.navigate('LogIn')
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Registarse</Text>
          <TextInput style={inputStyles.input} placeholder="Nombre" onChangeText={e => handleName(e)}/>
          <TextInput style={inputStyles.input} placeholder="Apellido" onChangeText={e => handleLastName(e)}/>
        <Picker
            selectedValue={selectedType}
            style={inputStyles.input}
            onValueChange={(itemValue, itemIndex) => setType(itemValue)}
        >
            <Picker.Item label="Guia" value="Guia" />
            <Picker.Item label="Cajera" value="Cajera" />
        </Picker>
          <TextInput style={inputStyles.input} placeholder="Contraseña" secureTextEntry={true} onChangeText={e => handlePassword(e)}/>
          <Button color="blue" title="Entrar" onPress={submit} />
          
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
        padding: 10
    }
})

export default Register;