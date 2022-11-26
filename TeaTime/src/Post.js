import { TextInput, TouchableOpacity, Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { CheckBox } from 'react-native-elements'
import axios from 'axios'

export default function Post({navigation, route}) {
    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [autor, setAutor] = useState("");
    const [comentario, setComentario] = useState("");
    const [classificacao, setClassificacao] = useState("");
    const [opcao, setOpcao] = useState("");
    const [msg, setMsg] = useState('');

    const {email, getPosts} = route.params
    useEffect(() => {
        getPosts()
    },[])
    async function post(){
        let response = await fetch('http://10.32.11.166:3005/posts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                titulo: titulo,
                genero: genero,
                sinopse: sinopse,
                autor: autor,
                comentario: comentario,
                classificacao: classificacao,
                opcao: opcao
            })
        })
        navigation.navigate('Home', {email})
        getPosts()
        }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.inputs}>
                    <Text style={styles.nomelivro}> Nome do Livro: </Text>
                    <TextInput style={styles.input} placeholder='' onChangeText={text=>setTitulo(text)} placeholderTextColor={'white'} underlineColorAndroid='white'/> 
                    <Text style={styles.nomelivro}> Gênero: </Text>
                    <TextInput style={styles.input} placeholder='' onChangeText={text=>setGenero(text)} placeholderTextColor={'white'} underlineColorAndroid='white'/> 
                    <Text style={styles.nomelivro}> Sinopse: </Text>
                    <TextInput style={styles.input} placeholder='' onChangeText={text=>setSinopse(text)} placeholderTextColor={'white'} underlineColorAndroid='white'/>
                    <Text style={styles.nomelivro}> Autor: </Text>
                    <TextInput style={styles.input} placeholder='' onChangeText={text=>setAutor(text)} placeholderTextColor={'white'} underlineColorAndroid='white'/> 
                    <Text style={styles.nomelivro}> Comentários sobre: </Text>
                    <TextInput style={styles.input} placeholder='' onChangeText={text=>setComentario(text)} placeholderTextColor={'white'} underlineColorAndroid='white'/> 
                    <Text style={styles.nomelivro}> Classificação indicativa:  </Text>
                    <TextInput style={styles.input} placeholder='' onChangeText={text=>setClassificacao(text)} placeholderTextColor={'white'} underlineColorAndroid='white'/> 
                    <Text style={styles.nomelivro}>Troca ou Doação:  </Text>
                    <TextInput style={styles.input} placeholder=''  onChangeText={text=>setOpcao(text)} placeholderTextColor={'white'} underlineColorAndroid='white'/> 
                    </View>
                    <TouchableOpacity style={styles.btnn} onPress={() => post()}>
                        <Text style={styles.branco}>Postar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )}
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#93032E',
            display: 'flex',
            flex: 1,
            flexDirection: 'column', 
        },
        inputs: {
            width: 400,
            height: 550,
            marginLeft: 15,
            justifyContent: 'space-around',
            top: 30,
            display:'flex',
            flexDirection:'column'
        },
        nomelivro:{
            fontSize: 25,
            color: 'white',
            height: 45
        },
        input: {
            fontSize: 20,
            padding: 5,
            height: 40,
            width: 300,
            color: 'white',
        },
        livre:{
            top: 195,
            fontSize: 25,
            color: 'white',
            height: 35
        },
        btn: {
            width: 300,
            height: 50,
            backgroundColor: '#C69F89',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 20,

        },
        button: {
            width: 300,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 140,
    
        },
        branco: {
            color: "white",
            fontSize: 15,
        },
        btnn:{
            width: 470,
            height: 50,
            backgroundColor: '#C69F89',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 197,
        }
    });