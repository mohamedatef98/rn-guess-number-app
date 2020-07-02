import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Colors, Fonts } from '../theme'

const Header = ({ title }) => {
    return <View style={styles.header}>
        <Text style={styles.text} >{title}</Text>
    </View>
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontFamily: Fonts.bold
    }
})

export default Header
