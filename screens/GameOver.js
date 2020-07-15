import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Colors, Fonts } from '../theme'
import { Button, Text } from '../components'

const GameOver = ({ numOfGuesses, userChoice, onRestart }) => {
    return <View style={styles.screen}>
        <Text style={styles.title}>Game is Over!</Text>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/success.png')} />
        </View>
        <Text style={styles.summary}>It took <Text style={styles.highlighted}>{numOfGuesses}</Text> to guess <Text style={styles.highlighted}>{userChoice}</Text>.</Text>
        <Button onPress={onRestart}>New Game ?</Button>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: 20
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
    },
    summary: {
        fontSize: 20,
        marginVertical: 30,
        marginHorizontal: 15
    },
    highlighted: {
        color: Colors.primary,
        fontFamily: Fonts.bold
    }
})

export default GameOver
