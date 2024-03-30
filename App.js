import React from "react"
import { StyleSheet, Text, View } from "react-native"


export default props = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={style.text}>Calcular App</Text>
    </View>
  )
}

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})