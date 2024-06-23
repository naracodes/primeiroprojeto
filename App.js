import React, { Component } from "react";
import { View, Text } from "react-native";

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
        <Text>Meu primeiro app.</Text>
      </View>
      
    );
  }

}

export default App2;