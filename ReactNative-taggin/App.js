import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Screens/Welcome';
import SignupScreen2 from './Screens/SignupScreen2';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="Home" >
      <Stack.Screen name= "Home" component ={HomeScreen} options={{headerShown: false}} />
               <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
              <Stack.Screen name="Signup 2" component={SignupScreen2} options={{headerShown: false}} />
              <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}} />
              
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
