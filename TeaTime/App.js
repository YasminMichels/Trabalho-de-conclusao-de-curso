import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login.js';
import Cadastro from './src/Cadastro.js';
import Home from './src/Home.js';
import Post from './src/Post.js'; 
import Perfil from './src/Perfil.js';
import Livro from './src/Livro.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name = "Login"component = {Login}
       options={{headerShown:false}}
       />
       <Stack.Screen name = "Cadastro" component = {Cadastro}
       options={{headerShown:false}}
       />
       <Stack.Screen name = "Home" component = {Home} 
       options={{headerShown:false}}
       />
       <Stack.Screen name = "Post" component = {Post}
       options={{headerStyle: {
        backgroundColor: '#C69F89'},
        headerTintColor: '#fff',  
      }}
       />
       <Stack.Screen name = "Perfil" component = {Perfil}
       options={{headerStyle: {
        backgroundColor: '#C69F89'},
        headerTintColor: '#fff',  
      }}
       />
        <Stack.Screen name = "Livro" component = {Livro}
       options={{headerStyle: {
        backgroundColor: '#C69F89'},
        headerTintColor: '#fff',  
      }}
       />
     </Stack.Navigator>
   </NavigationContainer>

  );
};
