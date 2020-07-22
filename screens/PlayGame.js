import React, { useState, useRef, useEffect } from 'react'
import { View, Alert, ScrollView, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { NumberContainer, Card, Button, Text } from '../components'
import { Fonts, Colors } from '../theme'
import { useStyles } from '../hooks'

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

    const styles = useStyles(({ isDark }) => ({
        screen: {
            alignItems: 'center',
            flex: 1,
            padding: 10
        },
        title: {
            fontFamily: Fonts.bold
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 20,
            width: 400,
            maxWidth: '90%'
        },
        smallerControlsContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '80%'
        },
        text: {
            fontFamily: Fonts.primary
        },
        listContainer: {
            flex: 1,
            width: '60%'
        },
        list: {
            flexGrow: 1,
            justifyContent: 'flex-end'
        },
        listItem: {
            borderColor: '#ccc',
            borderWidth: 1,
            marginVertical: 10,
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: isDark ? Colors.greyish : Colors.whitish
        }
    }))

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userChoice))
    const [pastGuesses, setPastGuesses] = useState([currentGuess])

    const [isSmallerView, setIsSmallerView] = useState(Dimensions.get('window').height < 500)

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(
        () => {
            if (userChoice === currentGuess) onGameOver(pastGuesses.length)
        },
        [userChoice, currentGuess, onGameOver, pastGuesses]
    )

    useEffect(() => {
        const listener = ({ window }) => setIsSmallerView(window.height < 500)
        Dimensions.addEventListener('change', listener)

        return () => Dimensions.removeEventListener('change', listener)
    }, [])

    const nextGuessHandler = direction => {
        if ((direction === DIRECTION_LOWER && currentGuess < userChoice) || (direction === DIRECTION_GREATER && currentGuess > userChoice))
            return Alert.alert('Don\'t lie!', 'You know that was wrong...', [{ text: 'Sorry!', style: 'cancel' }])

        else if (direction === DIRECTION_LOWER)
            currentHigh.current = currentGuess

        else if (direction === DIRECTION_GREATER)
            currentLow.current = currentGuess + 1

        const nextRnd = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess)

        setCurrentGuess(nextRnd)
        setPastGuesses(pastGuesses => [nextRnd, ...pastGuesses])
    }

    const lowerPressHandler = () => nextGuessHandler(DIRECTION_LOWER)

    const greaterPressHandler = () => nextGuessHandler(DIRECTION_GREATER)

    let controls = isSmallerView ?
        <>
            <View style={styles.smallerControlsContainer}>
                <Button onPress={lowerPressHandler}>
                    <Ionicons name="md-remove" size={24} />
                </Button>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Button onPress={greaterPressHandler}>
                    <Ionicons name="md-add" size={24} />
                </Button>
            </View>
        </> :
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button onPress={lowerPressHandler}>
                    <Ionicons name="md-remove" size={24} />
                </Button>
                <Button onPress={greaterPressHandler}>
                    <Ionicons name="md-add" size={24} />
                </Button>
            </Card>
        </>

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
            {controls}
            <View style={styles.listContainer}>
                <ScrollView alwaysBounceVertical={false} contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, i) => (<View key={guess} style={styles.listItem}>
                        <Text style={styles.text}>#{pastGuesses.length - i}</Text>
                        <Text style={styles.text}>{guess}</Text>
                    </View>))}
                </ScrollView>
            </View>
        </View>
    )
}

export default PlayGame
