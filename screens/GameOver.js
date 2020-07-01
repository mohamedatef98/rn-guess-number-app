import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOver = ({ numOfGuesses, userChoice, onRestart }) => {
    return <View style={styles.screen}>
        <Text>Game is Over!</Text>
        <Text>Your Number was {userChoice}</Text>
        <Text>It took {numOfGuesses} guesses to find it</Text>
        <Button title="New Game ?" onPress={onRestart} />
    </View>
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default GameOver
