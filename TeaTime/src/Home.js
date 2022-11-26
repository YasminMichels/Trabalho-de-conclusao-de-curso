import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import logo1 from "../assets/logo1.png";
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
export default function Home({ navigation, route }) {
    const [posts, setPosts] = useState([])
    const { email, senha } = route.params

    useEffect(() => console.log("me mostra pipipopopo", posts), [posts])
    function getUsuario() {
        const res = fetch(`http://10.32.11.166:3005/usuarios/${email}`)
            .then(res => res.json())
            console.log(email);
    }
    async function getPosts() {
        const url = 'http://10.32.11.166:3005/posts/'
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .cath(error => console.log(error))
    }
    useEffect(() => {
        getUsuario()
        getPosts()
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={logo1}
                style={styles.imagem}
            />
            <ScrollView style={{ top: 100 }}>
                    {
                        posts.map(post => (
                            <View style={styles.card} key={post.id}>
                                <Text style={styles.texto}>{post.titulo} </Text>
                                <Text style={styles.texto}>{post.autor}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate("Livro", {idPost : post.id})}>
                                    <Text style={styles.texto}>Ver mais<AntDesign name="caretright" size={20} color="white" /></Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
            </ScrollView>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Post", {email: email, getPosts: getPosts})}>
                    <Text style={{color:'white'}}> Post </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Perfil")}>
                    <Text style={{color:'white'}}> Perfil </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#93032E',
        alignItems: "center",
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    imagem: {
        top: 80
    },
    posts: {
        height: 90,
        width: 400,
        top: 55,
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
    },
    buttons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: 60
    },
    btn: {
        width: '50%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C69F89',
        borderWidth: 1,
        borderColor: '#93032E'
    },
    texto:{
        color:'white',
        fontSize: 24,
    },
    card:{
        borderWidth: 0.8,
        borderColor: 'white',
        borderRadius: 13,
        width: 350,
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
    },

});