import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, Foundation, FontAwesome5 } from '@expo/vector-icons'

import TelaInicial from './Componentes/TelaInicial/index'
import TelaCatalogo from './Componentes/TelaCatalogo/index'
import TelaContato from './Componentes/TelaContato/index'

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 50
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#A10035',
          tabBarActiveBackgroundColor: '#A10035',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#A10035'
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20
          }
        }}
      >
        <Tabs.Screen
          name="Inicio"
          component={TelaInicial}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            )
          }}
        />
        <Tabs.Screen
          name="Catálogo"
          component={TelaCatalogo}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="wine-bottle" size={24} color={color} />
            )
          }}
        />
        <Tabs.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarIcon: ({ color }) => (
              <Foundation name="telephone" size={24} color={color} />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
