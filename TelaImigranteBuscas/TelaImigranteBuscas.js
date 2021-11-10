import React from 'react'
import {View, Text, TextInput, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'

import Constants from 'expo-constants'
import {Ionicons} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

import personLogo from '../assets/personImigrante.png'
import logo1 from '../assets/logoImigranteHome.png'

export default (props) => {
  const navigation = props.navigation
  return(
    <View style = {styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style = {styles.header}>
          <FontAwesome5 name="door-open" size={24} color="white" />
          <Text style = {styles.textoVoltar}> Sair</Text>
        </View>
      </TouchableOpacity>
      <View style = {styles.header1}>
        <View style={styles.textInput1}>
          <TextInput placeholder=" digite sua pesquisa" placeholderTextColor="black"></TextInput>
        </View>
        <Ionicons name="md-search-sharp" size={42} color='#0099ff' onPress={()=>alert('Realizando pesquisa, aguarde...')}/>
      </View>
      <View style = {styles.header2}>
        <Image source={logo1} style={styles.logo1format}/>
        <Ionicons name = "menu" size = {48} color = '#0099ff' onPress={()=>alert('Abrindo o Menu, aguarde...')}/>
      </View>
      <View style = {styles.perfil}>
        <Image source={personLogo} style={styles.logo2format}/>
        <Text style={styles.texto1}>Olá imigrante!</Text>
      </View>
      <View style = {styles.bottom}>  
        <TouchableOpacity style={styles.botao1} onPress={()=>alert('Anexado com sucesso!')}>
          <Text style={styles.textoBotao1}>Anexar currículo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
container: { flex: 1, marginTop: Constants.statusBarHeight},

header: {alignItems: "center", backgroundColor: '#0099ff', dispaly: 'flex', flexDirection: 'row'},

header1: {alignItems: "center", dispaly: 'flex', flexDirection: 'row', justifyContent: "space-between"},

header2: {flexDirection: 'row', alignItems: 'center', justifyContent: "space-between",},

textoVoltar: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16, justifyContent: "center", alignItems: "center", color: 'white'},

logo1format: { width: 140, height: 55},

perfil: { justifyContent: "space-between", alignItems: 'center', paddingTop: 100, paddingBottom: 100},

texto1: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 18, justifyContent: "center", alignItems: "center", color: 'black', marginTop: 30},

logo2format: {width: 150, height: 150, borderRadius: 100, backgroundColor: '#ddd'},

textInput1: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16, justifyContent: "center", alignItems: "center", height: 30, width: 200, backgroundColor: '#d3d3d3', borderRadius: 20, flex: 1,},

bottom: {alignItems: 'center', flex: 1, justifyContent: 'center'},

botao1: { height: 50, width: 300, backgroundColor: '#0099ff', borderRadius: 20, alignItems: "center", justifyContent: "center",},

textoBotao1: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, justifyContent: "flex-end", alignItems: "center", color: 'white' },
})