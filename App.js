import React, { Component } from "react";
import { View, Text, Image } from "react-native";

function App(){
  return(
    <View>
      <Text>Olá, Mundo !</Text>
    </View>
  );
}

class App2 extends Component{
  render(){

    return(
      <View>
        <Text>Olá, Mundo!</Text>
        {/*Adicionando uma propriedade style no Text*/}
        <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>Meu primeiro app.</Text>
        <Text style={{ fontSize: 18, color: 'blue' }}>
          Edinara Alencar
        </Text>

        <Logo largura={300} altura={300} nome={'Desenvolvedora Full-stack'}/>
      </View>
      
    );
  }

}

export default App2;

function Logo(props){

  let img = 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg';

  return(
    <View>
      <Image source={{ uri: img }} style={{ width: props.largura, height: props.altura }} />
      <Text> {props.nome} </Text>
    </View>
  );
}