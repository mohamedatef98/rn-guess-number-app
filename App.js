import React, { useState, useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { Header } from './components'
import { StartGame, Game } from './screens'


export default function App() {
  const [selectedNumber, setSelectedNumber] = useState()

  const startGameHandler = useCallback(
    (selectedNumber) => setSelectedNumber(selectedNumber),
    []
  )

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      { !selectedNumber ?
        <StartGame onStartGame={startGameHandler} /> : 
        <Game userChoice={selectedNumber} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
