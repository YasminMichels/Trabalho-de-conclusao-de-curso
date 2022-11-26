import { TextInput, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import logo1 from "../assets/logo1.png";

export default function Login({ navigation }) {
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [msg, setMsg] = useState('');

    async function login() {
        //caso testar e mostrar na web p link é: http://localhost:3000/create
        let response = await fetch('http://10.32.11.166:3005/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            })
        })
        let json = await response.json();
        if (json == 'error') {
            setMsg('Usuário ou senha invalidos!')
            setTimeout(() => {
                setMsg('');
            }, 3000);
        } else {
            console.log(response.body)
            navigation.navigate("Home",{
                email: email,
                senha: senha
            })
        }
    }
    return (
        <View style={styles.container}>
            <Image
                source={logo1}
                style={styles.imagem}
            />
            <View style={styles.inputs}>
                <Text> {email}-{senha}</Text>
                <TextInput style={styles.input} placeholder='Email:' onChangeText={text => setEmail(text)}  color='#fff' />
                <TextInput style={styles.input} placeholder='Senha:' onChangeText={text => setSenha(text)}secureTextEntry ={true} color='#fff' />
            </View>
            <View>
                <Text style={styles.msgn}>{msg}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn} onPress={login}>
                    <Text style={{color:'white'}}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={{color:'white'}}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#93032E',
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
    },    
    imagem: {
        top: -80
    },
    inputs: {
        width: 300,
        height: 180,
        display: 'flex',
        justifyContent: 'space-around',
        top: 160,
        alignItems: 'center',
        flexDirection: 'column',

    },
    input: {
        backgroundColor: "#C4C4C4",
        fontSize: 19,
        padding: 7,
        height: 60,
        width: 300,
        bottom: 110,
        borderRadius: 5
    },
    buttons: {
        width: 300,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        height: 150,
        top: 150
    },
    btn: {
        backgroundColor: '#C69F89',
        fontSize: 19,
        padding: 7,
        height: 60,
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        color: 'white',
        
    },

    msgn: {
        color: 'red',
        fontWeight: 'bold',
        marginTop: 5,
        top: 150,
        fontSize: 20
    }
});