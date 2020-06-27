import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = ({ children, style }) => (
    <View style={[styles.card, style]}>
        {children}
    </View>
)

const styles = StyleSheet.create({
    card: {
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
    }
})

export default Card
