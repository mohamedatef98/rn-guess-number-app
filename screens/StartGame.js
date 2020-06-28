import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import { Card, Input, NumberContainer } from '../components'
import { Colors } from '../theme'

const StartGame = ({ onStartGame }) => {
    const [enteredNumber, setEnteredNumber] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(0)


    const handleEnteredNumber = useCallback(
        (text) => setEnteredNumber(text.replace(/[^0-9]/g, '')),
        []
    )

    const handlePress = useCallback(
        () => Keyboard.dismiss(),
        []
    )

    const handleResetPress = useCallback(
        () => {
            setSelectedNumber(0)
            setEnteredNumber('')
            setConfirmed(false)
        }
    )

    const handleConfirmPress = useCallback(
        () => {
            const parsedEnteredNumber = parseInt(enteredNumber)
            if (Number.isNaN(parsedEnteredNumber) || parsedEnteredNumber <= 0 || parsedEnteredNumber > 99) {
                return Alert.alert('Invalid Number', 'Enter a Number between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: handleResetPress }])
            }
            setSelectedNumber(parsedEnteredNumber)
            setConfirmed(true)
            setEnteredNumber('')
        },
        [enteredNumber]
    )

    const startGameHandler = useCallback(
        () => onStartGame(selectedNumber),
        [selectedNumber]
    )

    return <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start new Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit keyboardType="number-pad" autoCorrect={false} maxLength={2} onChangeText={handleEnteredNumber} value={enteredNumber} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" color={Colors.accent} onPress={handleResetPress} /></View>
                    <View style={styles.button}><Button title="Confirm" color={Colors.primary} onPress={handleConfirmPress} /></View>
                </View>
            </Card>
            {confirmed && <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={startGameHandler} />
            </Card>}
        </View>
    </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 90
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})

export default StartGame
