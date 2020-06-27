import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

const StartGame = props => {
    return <View style={styles.screen}>
        <Text style={styles.title}>Start new Game</Text>
        <View style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <TextInput style={styles.input} />
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
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 8,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 0
        }
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
    }
})

export default StartGame
