import React from 'react'
import { SignUp } from './screens'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import { View, Text, StyleSheet } from 'react-native'
import tabs from './navigation/tabs'
const theme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors, 
    border: "transparent"
  }
}
{/** VIRTUALIZED LISTS SHOULD NEVER BE ENCLOSED INSIDE PLAIN SCROLLVIEWS */}

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown : false
          }}
          initialRouteName={'SignUp'}
      >
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="HomeTab" component={tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})