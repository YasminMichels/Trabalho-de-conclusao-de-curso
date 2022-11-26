import { Button, StyleSheet, Text, View, TouchableOpacity, Linking  } from 'react-native';
import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

export default function Livro({ navigation, route }) {
    const { idPost } = route.params
    const [data, setData] = useState([])
    async function getLivro() {
        const url = `http://10.32.11.166:3005/posts/${idPost}`
        axios.get(url)
            .then(response => {
                setData(response.data)
                
            })
            .cath(error => console.log(error))
        console.log(data)
    }

    useEffect(() => {
        getLivro()
        console.log(idPost)
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <Text style={styles.titulo}>{data.titulo}</Text>
                <Text style={styles.autor}>{data.autor}</Text>
                <Text style={styles.sinopse}>{data.sinopse}</Text>
                <Text style={styles.genero}><MaterialCommunityIcons name="bookshelf" size={22} color="white" /> Gênero: {data.genero}</Text>
                <Text style={styles.classificacao}><AntDesign name="infocirlceo" size={22} color="white" /> Classificação: +{data.classificacao}</Text>
                <Text style={styles.opcao}><Entypo name="price-tag" size={22} color="white" /> Opção: {data.opcao}</Text>
                <Text style={styles.comentario}><Ionicons name="chatbubble-outline" size={22} color="white" /> Comentário: {data.comentario}</Text>
            </View>    
            
            <TouchableOpacity style={styles.btn} onPress={() => {Linking.openURL('whatsapp://send?text=Oi&phone=+5548998516795')}}>
                    <Text style={{color:'white'}}> ENVIAR MENSAGEM </Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#93032E',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',

    },
    texto:{
        color: 'white',
        padding: 5,
        top: 15,

    },
    titulo:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        alignItems: 'center',
    },
    autor:{
        color: 'white',
        fontSize: 23,
        textAlign: 'center',
        alignItems: 'center',
    },
    sinopse:{
        color: 'white',
        fontSize: 19,
        textAlign: 'center',
        alignItems: 'center',
        borderColor: '#93032E',
        borderBottomColor: '#C69F89',
        borderWidth:0.8,
        padding: 15,

    },
    genero:{
        fontSize: 20,
        color: 'white',
        padding: 10,
        
    },
    classificacao:{
        fontSize: 20,
        color: 'white',
        padding: 10,
        
    },
    opcao:{
        fontSize: 20,
        color: 'white',
        padding: 10,
        
    },
    comentario:{
        fontSize: 20,
        color: 'white',
        padding: 10,
        
    },
    btn: {
        width: 480,
        height: 60,
        backgroundColor: '#C69F89',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        color: 'white',
        fontSize: 19, 
        position: 'absolute',
        bottom: '0%' 
    },

})