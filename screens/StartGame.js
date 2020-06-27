import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

import { Card } from '../components'
import { Colors } from '../theme'

const StartGame = props => {
    return <View style={styles.screen}>
        <Text style={styles.title}>Start new Game</Text>
        <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <TextInput style={styles.input} />
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="Reset" color={Colors.accent} /></View>
                <View style={styles.button}><Button title="Confirm" color={Colors.primary} /></View>
            </View>
        </Card>
    </View> 
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
        width: '70%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        padding: 7
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
