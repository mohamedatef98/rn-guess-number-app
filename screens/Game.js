import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

import { NumberContainer, Card } from '../components'

const DIRECTION_LOWER = 'lower'
const DIRECTION_GREATER = 'greater'

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const rnd = Math.floor((Math.random() * (max - min)) + min)

    if (rnd === exclude) return generateRandomNumber(min, max, exclude)
    return rnd
}

const Game = ({ userChoice }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userChoice))

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const nextGuessHandler = direction => {
            if ((direction === DIRECTION_LOWER && currentGuess < userChoice) || (direction === DIRECTION_GREATER && currentGuess > userChoice))
                return Alert.alert('Don\'t lie!', 'You know that was wrong...', [{ text: 'Sorry!', style: 'cancel' }])

            else if (direction === DIRECTION_LOWER)
                currentHigh.current = currentGuess

            else if (direction === DIRECTION_GREATER)
                currentLow.current = currentGuess

            const nextRnd = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess)

            setCurrentGuess(nextRnd)
        }
    
    const lowerPressHandler = () => nextGuessHandler(DIRECTION_LOWER)

    const greaterPressHandler = () => nextGuessHandler(DIRECTION_GREATER)

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={lowerPressHandler} />
                <Button title="GREATER" onPress={greaterPressHandler} />
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
