import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, Fonts } from '../theme'

const Button = ({ children, style, onPress, activeOpacity=0.8 }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity} >
        <View style={[styles.button, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    text: {
        color: 'white',
        fontFamily: Fonts.primary,
        fontSize: 18
    }
})

export default Button
