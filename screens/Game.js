import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { NumberContainer, Card } from '../components'

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const rnd = Math.floor((Math.random() * (max - min)) + min)

    if (rnd === exclude) return generateRandomNumber(min, max, exclude)
    return rnd
}

const Game = ({ userChoice }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userChoice))
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" />
                <Button title="GREATER" />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default Game
