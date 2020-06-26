import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from './components'
import { StartGame } from './screens'


export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      <StartGame />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
