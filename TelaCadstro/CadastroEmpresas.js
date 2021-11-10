import React from 'react'
import {View, Text, TextInput, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'

import Constants from 'expo-constants'
import {Ionicons} from '@expo/vector-icons'

export default ({navigation}) => {
  
  return(
    <View style = {styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('EntrarEmpresas')}>
        <View style = {styles.header}>
          <Ionicons name = "chevron-back-sharp" size = {24} color = 'white' />
          <Text style = {styles.textoVoltar}> Voltar</Text>
        </View>
        <View>
          <Text style={styles.textoCabecalho}>Preencha o cadastro abaixo:</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.textInput1}>
        <TextInput placeholder="  Nome completo" placeholderTextColor="black"></TextInput>
      </View>
      <View style={styles.textInput1}>
        <TextInput placeholder=" Data de nascimento" placeholderTextColor="black"></TextInput>
      </View>
      <View style={styles.textInput1}>
        <TextInput placeholder="  Nacionalidade" placeholderTextColor="black"></TextInput>
      </View>
      <View style={styles.textInput1}>
        <TextInput placeholder=" Estado civil" placeholderTextColor="black"></TextInput>
      </View>
      <View style={styles.textInput1}>
        <TextInput placeholder="  Telefone (DDD) XXXXX-XXXX" placeholderTextColor="black"></TextInput>
      </View>
      <View style={styles.textInput1}>
        <TextInput placeholder="  Endereço" placeholderTextColor="black"></TextInput>
      </View>
      <View style={styles.textInput2}>
        <TextInput placeholder="  E-mail" placeholderTextColor="black"></TextInput>
      </View>
      <View style={styles.textInput1}>
        <TextInput placeholder="  Senha" placeholderTextColor="black"></TextInput>
      </View>
      <View style={styles.textInput1}>
        <TextInput placeholder="  Repita a senha" placeholderTextColor="black"></TextInput>
      </View>
      <TouchableOpacity style={styles.botao1} onPress={()=>navigation.navigate('EntrarEmpresas')}>
        <Text style={styles.textoBotao1}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
container: { flex: 1, marginTop: Constants.statusBarHeight},

header: {alignItems: "center", backgroundColor: '#0099ff', dispaly: 'flex', flexDirection: 'row'},

textoVoltar: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16, justifyContent: "center", alignItems: "center", color: 'white'},

textoCabecalho: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, justifyContent: "center", alignItems: "center", color: 'black', padding: 20, marginLeft: 30, marginRight: 30,},

botao1: { height: 50, width: 300, backgroundColor: '#0099ff', borderRadius: 20, alignItems: "center", justifyContent: "center", marginLeft: 45, marginRight: 45, marginBottom: 20, marginTop: 90},

textoBotao1: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, color: 'white' },

textInput1: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16, height: 30, justifyContent: "center", alignItems: "left",width: 300, backgroundColor: '#d3d3d3', borderRadius: 10, marginLeft: 45, marginRight: 45, marginTop: 5},

textInput2: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16, height: 30, justifyContent: "center", alignItems: "left",width: 300, backgroundColor: '#d3d3d3', borderRadius: 10, marginLeft: 45, marginRight: 45, marginTop: 30}

})