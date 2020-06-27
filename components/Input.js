import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = ({ style, ...rest }) => <TextInput style={[styles.input, style]} {...rest} />

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        height: 30,
        borderColor: 'grey',
        borderBottomWidth: 1
    }
})

export default Input
