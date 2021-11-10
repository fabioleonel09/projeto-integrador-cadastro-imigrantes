import React from 'react'
import {View, Text, TextInput, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'

import Constants from 'expo-constants'
import {Ionicons} from '@expo/vector-icons'

import logo from '../assets/EmpregadorIcone.png'



export default ({navigation}) => {
  
  return(
    <View style = {styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style = {styles.header}>
          <Ionicons name = "chevron-back-sharp" size = {24} color = 'white' />
          <Text style = {styles.textoVoltar}> Voltar</Text>
        </View>
      </TouchableOpacity>
      <View style = {styles.opcao}>
        <Text style={styles.textoCabecalho}>Seja bem-vindo!</Text>
        <Image source={logo} style={styles.logoCadastro}/>
        <View styles={styles.opcao}>
          <View style={styles.textInput1}>
            <TextInput placeholder="   Digite o seu e-mail" placeholderTextColor="black"></TextInput>
          </View>
          <View style={styles.textInput1}>
            <TextInput secureTextEntry={true} placeholder="   Digite a sua senha" placeholderTextColor="black"></TextInput>
          </View>
          <TouchableOpacity style={styles.botao1} onPress={()=>navigation.navigate('PagePrincipal')}>
            <Text style={styles.textoBotao1}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao2} onPress={()=>navigation.navigate('RegisterEmpresas')}>
            <Text style={styles.textoBotao2}>Não sou cadastrado!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

container: {flex: 1, marginTop: Constants.statusBarHeight},

header: {alignItems: "center", backgroundColor: '#0099ff', dispaly: 'flex', flexDirection: 'row'},

opcao: {padding: 20, flex: 1, justifyContent: 'space-evenly', alignItems: 'center'},

textoVoltar: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16, justifyContent: "center", alignItems: "center", color: 'white'},

textoCabecalho: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 30, justifyContent: "center", alignItems: "center", color: '#088F8F', padding: 20},

logoCadastro: { width: 149, height: 149, borderRadius: 90, marginLeft: 120, marginRight: 120, },

botao1: { height: 50, width: 300, backgroundColor: '#0099ff', borderRadius: 20, alignItems: "center", justifyContent: "center", marginLeft: 45, marginRight: 45, marginBottom: 20, marginTop: 90},

botao2: { height: 50, width: 300, backgroundColor: 'white', borderRadius: 20, alignItems: "center", justifyContent: "center", marginLeft: 45, marginRight: 45},

textoBotao1: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16, color: 'white' },

textoBotao2: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16, color: 'red' },

textInput1: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16, height: 50, justifyContent: "center", width: 300, backgroundColor: '#d3d3d3', borderRadius: 20, marginLeft: 45, marginRight: 45, marginTop: 30}
})