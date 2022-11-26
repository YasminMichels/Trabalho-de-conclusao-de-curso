import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios'
import { MaterialIcons } from '@expo/vector-icons';
//o erro ta nas funções
export default function Perfil({route, navigation }) {
        const [usuario, setUsuario] = useState([])
        const email = route.params
       
    useEffect(() => {
        getUsuario()
    }, [])

   async function getUsuario() {
        const url = `http://10.32.11.166:3005/usuarios/${email}`
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setUsuario(response.data)
            })
            .cath(error => console.log(error))
            }
    return (
        <View style={styles.container}>
            <View style={styles.naosei}>
                <FontAwesome name="user-circle-o" size={200} color="white"/>   
                <Text style={styles.nome}>{usuario.nome} </Text>
                <Text style={styles.email}>{usuario.email}</Text>
                <Text style={styles.telefone}>{usuario.telefone}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
                <Text><MaterialIcons name="logout" size={35} color="white" /></Text>
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
        alignItems: 'center',
    },
    naosei:{
        height:400,
        width: 400,
        marginTop: 10,
        alignItems: 'center',
        padding: 10
    },
    nome:{
        color: 'white',
        fontSize: 30,
        flexDirection: 'row',
        top: 25, 
    },
    email:{
        color: 'white',
        fontSize: 20,
        flexDirection: 'row',
        top: 25,
    },
    telefone:{
        color: 'white',
        fontSize: 20,
        flexDirection: 'row',
        top: 25
    },
    btn:{
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C69F89',
        height: 60,
        top: 327
    }
});