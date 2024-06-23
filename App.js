import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function App(){
  const [nome, setNome] = useState('usuário');
  const [idade, setIdade] = useState(20);

  function entrar(nome, idade){
    setNome(nome);
    setIdade(idade);
  }

  return(
    <View style={styles.area}>
      <Button title="Mudar nome" onPress={ () => entrar('Nara Alencar', 25)} />

      <Text style={[styles.titulo, styles.textoCentralizado]}> Olá, {nome} </Text>
      <Text style={styles.titulo}> Você tem {idade} anos. </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    marginTop: 50
  },
  titulo: {
    fontSize: 20,
    color: 'red'
  },
  textoCentralizado: {
    textAlign: 'center'
  }
});

export default App;