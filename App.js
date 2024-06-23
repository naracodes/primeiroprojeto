import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";

function App(){
  const [nome, setNome] = useState('usuário');
  const [idade, setIdade] = useState(20);

  function entrar(nome, idade){
    setNome(nome);
    setIdade(idade);
  }

  return(
    <View>
      <Button title="Mudar nome" onPress={ () => entrar('Nara Alencar', 25)} />

      <Text style={{ fontSize: 18, margin: 15 }}> Olá, {nome} </Text>
      <Text> Você tem {idade} anos. </Text>
    </View>
  );
}

export default App;