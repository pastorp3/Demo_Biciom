import { StyleSheet, Text, View, Button } from 'react-native';
import GlobalStyles from './src/styles/GlobalStyles';
import { SafeAreaView } from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './src/screens/LogInScreen';
import HomeScreen from './src/screens/HomeScreem';
import AddTrip from './src/screens/AddTrip';
import NewTrip from './src/screens/newTrip';
import TripsScreen from './src/screens/TripsScreen';
import MyTripsSCreen from './src/screens/MyTripsScreen';
import RegisterScreen from './src/screens/RegisterScreen';


// const AboutScreen = () => {
// return (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>About Screen</Text>
//   </View>
// );
// }

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LogIn" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="LogIn">
          { porps => <LogInScreen {...porps} />}
          </Stack.Screen>
          <Stack.Screen name="Home">
            { porps => <HomeScreen {...porps} />}
          </Stack.Screen>
          <Stack.Screen name="AddTrip">
          { porps => <AddTrip {...porps} />}
          </Stack.Screen>
          <Stack.Screen name="NewTrip">
          { porps => <NewTrip {...porps} />}
          </Stack.Screen>
          <Stack.Screen name="TripsScreen">
          { porps => <TripsScreen {...porps} />}
          </Stack.Screen>
          <Stack.Screen name="MyTripsScreen">
          { porps => <MyTripsSCreen {...porps} />}
          </Stack.Screen>
          <Stack.Screen name="RegisterScreen">
          { porps => <RegisterScreen {...porps} />}
          </Stack.Screen>
        </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
