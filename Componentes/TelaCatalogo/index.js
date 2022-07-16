import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import VinhoBranco from '../../assets/vinho-branco.jpg'
import VinhoEspecial from '../../assets/vinho-especial.jpg'
import VinhoRose from '../../assets/vinho-rose.jpg'
import VinhoSeco from '../../assets/vinho-seco.png'
import VinhoTinto from '../../assets/vinho-tinto.jpg'

import estilos from './estilos'

export default function TelaCatalogo() {
  return (
    <ScrollView>
      <View style={estilos.container}>
        <Text style={estilos.titulo}>NOSSOS VINHOS</Text>
        <Text style={estilos.descricao}>
          Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco,
          vinho rosé, vinho tinto e vinho seco.
        </Text>
        <View style={estilos.box}>
          <Image style={estilos.img} source={VinhoBranco} />
          <View style={estilos.subbox}>
            <Text style={estilos.titulobox}>Chatigny Chardonnay</Text>
            <Text style={estilos.descricaobox}>
              Vinho leve, refrescante e levemente cítrico da cor amarelo palha.
              Perfeito com carnes brancas e massa ao pesto.
            </Text>
          </View>
        </View>

        <View style={estilos.box}>
          <Image style={estilos.img} source={VinhoEspecial} />
          <View style={estilos.subbox}>
            <Text style={estilos.titulobox}>Elvio Cogno Ravera Barolo</Text>
            <Text style={estilos.descricaobox}>
              Vinho estruturado, com sabor de cereja vermelha madura, framboesa,
              notas de tabaco e taninos aveludados. Sua cor é vermelho granada e
              é perfeito com carnes vermelhas e molhos encorpados.
            </Text>
          </View>
        </View>

        <View style={estilos.box}>
          <Image style={estilos.img} source={VinhoRose} />
          <View style={estilos.subbox}>
            <Text style={estilos.titulobox}>Concha y Toro Exportacion</Text>
            <Text style={estilos.descricaobox}>
              Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito
              com saladas e aperitivos.
            </Text>
          </View>
        </View>

        <View style={estilos.box}>
          <Image style={estilos.img} source={VinhoSeco} />
          <View style={estilos.subbox}>
            <Text style={estilos.titulobox}>
              Vinho Asio Otus Vino Rosso Enigmatico
            </Text>
            <Text style={estilos.descricaobox}>
              Pluma preta de cereja, groselha, amoras maduras e algumas ameixas
              secas. Nuances de baunilha, canela e notas de violeta. Notas
              balsâmicas e madeira de cedro, completam o buquê.
            </Text>
          </View>
        </View>

        <View style={estilos.box}>
          <Image style={estilos.img} source={VinhoTinto} />
          <View style={estilos.subbox}>
            <Text style={estilos.titulobox}>Portada Winemaker's</Text>
            <Text style={estilos.descricaobox}>
              Vinho encorpado, saboroso e frutado, com final levemente
              adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e
              carnes assadas ou grelhadas.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
