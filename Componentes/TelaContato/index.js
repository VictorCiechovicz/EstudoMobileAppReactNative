import React from 'react'
import { Text, View } from 'react-native'
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons'

import estilos from './estilos'
import { ScrollView } from 'react-native-gesture-handler'

export default function TelaContato() {
  return (
    
      <View style={estilos.container}>
        <Text style={estilos.descricaoinicial}>
          Entre em contato conosco para comprar nossos produtos
        </Text>

        <View style={estilos.box}>
          <FontAwesome name="phone" size={50} color="#400303" />
          <Text style={estilos.titulo}>Telefone:</Text>
          <Text style={estilos.descricao}>+55 21 000000000</Text>
        </View>

        <View style={estilos.box}>
          <Entypo name="location-pin" size={50} color="#400303" />
          <Text style={estilos.titulo}>Endereço:</Text>
          <Text style={estilos.descricao}>
            Av. 123, 222 - Rio de Janeiro RJ
          </Text>
        </View>

        <View style={estilos.box}>
          <MaterialIcons name="email" size={50} color="#400303" />
          <Text style={estilos.titulo}>Email:</Text>
          <Text style={estilos.descricao}>preferida@adega.com.br</Text>
        </View>

        <View style={estilos.box}>
          <FontAwesome name="instagram" size={50} color="#400303" />
          <Text style={estilos.titulo}>Instagram:</Text>
          <Text style={estilos.descricao}>@adegapreferida</Text>
        </View>
      </View>
    
  )
}
