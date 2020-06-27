import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

const StartGame = props => {
    return <View style={styles.screen}>
        <Text>Game Screen</Text>
        <View style={styles.inputContainer}>
            <Text style={styles.title}>Start new Game</Text>
            <TextInput />
            <View style={styles.buttonContainer}>
                <Button title="Reset" />
                <Button title="Confirm" />
            </View>
        </View>
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
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})

export default StartGame
