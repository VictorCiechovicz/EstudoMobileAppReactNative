import React from 'react'
import { Text, ImageBackground } from 'react-native'

import Capa from '../../assets/capa.jpg'

import estilos from './estilos'

export default function TelaInicial() {
  return (
    <ImageBackground source={Capa} style={estilos.fundo} blurRadius={5}>
      <Text style={estilos.titulo}>Adega Preferida</Text>
      <Text style={estilos.subtitulo}>
        Aqui você encontra os melhores e mais saborosos vinhos.
      </Text>
    </ImageBackground>
  )
}
