import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Colors } from '../theme'

const NumberContainer = ({ children, style }) => {
    return <View style={[styles.container, style]}>
        <Text style={styles.number}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        borderColor: Colors.accent,
        borderRadius: 10,
        borderWidth: 2
    },
    number: {
        fontSize: 22,
        color: Colors.accent
    }
})

export default NumberContainer
