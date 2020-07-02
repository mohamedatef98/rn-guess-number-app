import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

import { NumberContainer, Card } from '../components'
import { Fonts } from '../theme'

const DIRECTION_LOWER = 'lower'
const DIRECTION_GREATER = 'greater'

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const rnd = Math.floor((Math.random() * (max - min)) + min)

    if (rnd === exclude) return generateRandomNumber(min, max, exclude)
    return rnd
}

const PlayGame = ({ userChoice, onGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userChoice))
    const [numOfGuesses, setNumberOfGuesses] = useState(0)

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(
        () => {
            if (userChoice === currentGuess) onGameOver(numOfGuesses)
        },
        [userChoice, currentGuess, onGameOver, numOfGuesses]
    )

    const nextGuessHandler = direction => {
            if ((direction === DIRECTION_LOWER && currentGuess < userChoice) || (direction === DIRECTION_GREATER && currentGuess > userChoice))
                return Alert.alert('Don\'t lie!', 'You know that was wrong...', [{ text: 'Sorry!', style: 'cancel' }])

            else if (direction === DIRECTION_LOWER)
                currentHigh.current = currentGuess

            else if (direction === DIRECTION_GREATER)
                currentLow.current = currentGuess

            const nextRnd = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess)

            setCurrentGuess(nextRnd)
            setNumberOfGuesses(num => num + 1)
        }
    
    const lowerPressHandler = () => nextGuessHandler(DIRECTION_LOWER)

    const greaterPressHandler = () => nextGuessHandler(DIRECTION_GREATER)

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
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
    title: {
        fontFamily: Fonts.bold
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default PlayGame
