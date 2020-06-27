import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { Card, Input } from '../components'
import { Colors } from '../theme'

const StartGame = props => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const handleEnteredNumber = useCallback(
        (text) => setEnteredNumber(text.replace(/[^0-9]/g, '')),
        []
    )

    const handlePress = useCallback(
        () => Keyboard.dismiss(),
        []
    )

    return <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start new Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit keyboardType="number-pad" autoCorrect={false} maxLength={2} onChangeText={handleEnteredNumber} value={enteredNumber} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" color={Colors.accent} /></View>
                    <View style={styles.button}><Button title="Confirm" color={Colors.primary} /></View>
                </View>
            </Card>
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
    }
})

export default StartGame
