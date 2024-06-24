import React from "react";
import { View, Text } from "react-native";

function App(){

  return(
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={{ height: 60, backgroundColor: '#121212' }}></View>
      <View style={{ flex: 1, backgroundColor: 'gray' }}></View>
      <View style={{ height: 60, backgroundColor: '#121212' }}></View>
    </View>
  );
}

export default App;