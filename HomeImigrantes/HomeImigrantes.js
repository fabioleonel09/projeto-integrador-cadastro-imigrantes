import React from 'react'
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'
import logoHome from '../assets/logoImigranteHome.png'


export default ({navigation}) => {

  return(
    <View style={styles.container}>
      <View styles={styles.header}>
        <Image source={logoHome} style={styles.logoHome}/>       
      </View>
      <View styles={styles.opcao}>
        <TouchableOpacity style={styles.botao1} onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.textoBotao1}>Imigrante</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao2} onPress={()=>navigation.navigate('EntrarEmpresas')}>
          <Text style={styles.textoBotao1}>Empresa</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
container: { flex: 1, marginTop: Constants.statusBarHeight},

header: {alignItems: "center"},

opcao: {padding: 20, flex: 1, justifyContent: 'space-evenly' },

logoHome: { width: 334, height: 131, marginLeft: 13, marginRight: 13, marginBottom: 30, marginTop: 200},

botao1: { height: 50, width: 300, backgroundColor: '#0099ff', borderRadius: 20, alignItems: "center", justifyContent: "center", marginLeft: 45, marginRight: 45, marginBottom: 20, marginTop: 90},

botao2: { height: 50, width: 300, backgroundColor: '#0099ff', borderRadius: 20, alignItems: "center", justifyContent: "center", marginLeft: 45, marginRight: 45},

textoBotao1: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16, justifyContent: "center", alignItems: "center", color: 'white' },

})
