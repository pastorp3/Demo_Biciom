import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';

const LogIn = ({navigation}) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');
    const handleName = (event) => {
      setName(event)
    }
    const handlePassword = (e) => {
      setPassword(e)
    }

    const submit = () => {
      let tmp = {};
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, password: password })
      }

      fetch('https://infinite-sands-31487.herokuapp.com/login', requestOptions)
        .then(response => response.json())
        .then(data => setUser(data));
    }

    useEffect(() => {
      if(user[0]) navigation.navigate('Home', {
        user: user
      });
    }, [user])

    const handleRegister = () => {
      navigation.navigate('RegisterScreen')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Iniciar Sesion</Text>
          <TextInput style={inputStyles.input} placeholder="Nombre" onChangeText={e => handleName(e)}/>
          <TextInput style={inputStyles.input} placeholder="Contraseña" secureTextEntry={true} onChangeText={e => handlePassword(e)}/>
          <Button color="blue" title="Entrar" onPress={submit} />
          <Pressable style={inputStyles.button} onPress={handleRegister}>
                <Text style={inputStyles.text}>Registarse</Text>
            </Pressable>
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
    },
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

export default LogIn;