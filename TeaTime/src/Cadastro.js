import { TextInput, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import React, {useState} from 'react';
import logo1 from "../assets/logo1.png";



export default function Cadastro({navigation}) {
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [senha, setSenha] = useState(null);
    const [msg, setMsg] = useState('');


    async function cadastro(){
        //caso testar e mostrar na web p link é: http://localhost:3000/create
        let response = await fetch('http://10.32.11.166:3005/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: '',
                nome: nome,
                email: email,
                telefone: telefone,
                senha: senha,
            })
        })
        navigation.navigate('Login')
            let json = await response.json();
            if (json== 'error'){
                setMsg('Usuário ou senha invalidos!')
                setTimeout(()=>{
                    setMsg('');
                }, 3000);
            } else{
                navigation.navigate('Home')
            }
        }
    return (
        <View style={styles.container}>
            <Image
                source={logo1}
                style={styles.imagem}
            />
            <View style={styles.inputs}>
                <Text> {nome}-{email}-{telefone}-{senha}</Text>
                <TextInput style={styles.input} placeholder='Nome' onChangeText={text=>setNome(text)} color='#fff' />
                <TextInput style={styles.input} placeholder='Email:' onChangeText={text=>setEmail(text)} color='#fff' />
                <TextInput style={styles.input} placeholder='Telefone:' onChangeText={text=>setTelefone(text)} color='#fff' />
                <TextInput style={styles.input} placeholder='Senha:' onChangeText={text=>setSenha(text)}secureTextEntry ={true} color='#fff' />
                <TextInput style={styles.input} placeholder='Confirmar Senha:' secureTextEntry ={true} color='#fff' />
                <TouchableOpacity style={styles.btn} onPress={cadastro} >
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
    imagem:{
        top: -80
    },
    inputs: {
        width: 300,
        height: 460,
        display: 'flex',
        top: -50,
        justifyContent: 'space-around',
        top:100,
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
    btn: {
        width: 300,
        height: 60,
        backgroundColor: '#C69F89',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        color: 'white',
        fontSize: 19,
        bottom: 30,
    },
    
});
