import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
    color: '#400303'
  },
  descricao: {
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: 'justify',
    marginBottom: 10
  },
  box: {
    width: 400,
    height: 200,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#DFBB9D'
  },
  subbox: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 300,
    height: 100
  },
  img: {
    width: 30,
    height: 110,
    marginHorizontal: 20
  },
  titulobox: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  descricaobox: {
    fontSize: 15
  }
})

export default estilos
