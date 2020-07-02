import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { Header } from './components'
import { StartGame, PlayGame, GameOver } from './screens'

const GAME_START = 'start'
const GAME_RUNNING = 'running'
const GAME_OVER = 'over'

const Game = (props) => {
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [numberOfGuesses, setNumberOfGuesses] = useState(0)

  const [gameState, setGameState] = useState(GAME_START)

  const restartGameHandler = useCallback(
    () => {
      setSelectedNumber(null)
      setNumberOfGuesses(0)
      setGameState(GAME_START)
    }
  )

  const startGameHandler = useCallback(
    (selectedNumber) => {
      setSelectedNumber(selectedNumber)
      setGameState(GAME_RUNNING)
    },
    []
  )

  const gameOverHandler = useCallback(
    (numberOfGuesses) => {
      setNumberOfGuesses(numberOfGuesses)
      setGameState(GAME_OVER)
    },
    []
  )

  let content

  switch(gameState) {
    case GAME_START:
      content = <StartGame onStartGame={startGameHandler} />
      break
    case GAME_RUNNING:
      content = <PlayGame userChoice={selectedNumber} onGameOver={gameOverHandler} />
      break
    case GAME_OVER: 
      content = <GameOver userChoice={selectedNumber} numOfGuesses={numberOfGuesses} onRestart={restartGameHandler} />
      break      
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Game
