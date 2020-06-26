import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const StartGame = props => {
    return <View style={styles.screen}>
        <Text>Game Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})

export default StartGame
