import React from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { Colors, Fonts } from '../theme'
import { Button, Text } from '../components'
import { useStyles } from '../hooks'

const GameOver = ({ numOfGuesses, userChoice, onRestart }) => {
    const styles = useStyles(({ dimensions }) => ({
        screen: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        },
        title: {
            fontFamily: Fonts.bold,
            fontSize: dimensions.height / 20
        },
        imageContainer: {
            width: dimensions.height / 3,
            height: dimensions.height / 3,
            borderColor: 'black',
            borderWidth: 3,
            borderRadius: dimensions.height / 6,
            overflow: 'hidden',
            marginVertical: dimensions.height / 25
        },
        image: {
            width: '100%',
            height: '100%'
        },
        summary: {
            fontSize: dimensions.height / 25,
            marginVertical: dimensions.height / 100,
            marginHorizontal: dimensions.width / 20
        },
        highlighted: {
            color: Colors.primary,
            fontFamily: Fonts.bold
        }
    }))

    return <View style={styles.screen}>
        <Text style={styles.title}>Game is Over!</Text>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/success.png')} />
        </View>
        <Text style={styles.summary}>It took <Text style={styles.highlighted}>{numOfGuesses}</Text> to guess <Text style={styles.highlighted}>{userChoice}</Text>.</Text>
        <Button onPress={onRestart}>New Game ?</Button>
    </View>
}

export default GameOver
