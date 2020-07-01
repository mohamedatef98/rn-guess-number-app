import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const GameOver = ({ numOfGuesses, userChoice, onRestart }) => {
    return <View style={styles.screen}>
        <Text style={styles.title}>Game is Over!</Text>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/success.png')} />
        </View>
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
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 150,
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default GameOver
