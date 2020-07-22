import React, { useMemo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import { Colors, Fonts } from '../theme'

const Button = ({ children, style, onPress, activeOpacity = 0.8 }) => {
    const commonTouchableProps = {
        onPress
    }

    const Touchable = Platform.OS === 'android' ?
        ({ children }) => <TouchableNativeFeedback {...commonTouchableProps}>
            {children}
        </TouchableNativeFeedback> :
        ({ children }) => <TouchableOpacity {...commonTouchableProps} activeOpacity={activeOpacity}>
            {children}
        </TouchableOpacity>

    return <View style={styles.buttonContainer}>
        <Touchable>
            <View style={[styles.button, style]}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Touchable>
    </View>
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30
    },
    text: {
        color: 'white',
        fontFamily: Fonts.primary,
        fontSize: 18
    }
})

export default Button
