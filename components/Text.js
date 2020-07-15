import React from 'react'
import { Text as RNText } from 'react-native'
import { useStyles } from '../hooks'

const Text = ({ children, style, adaptive=true }) => {
    const styles = useStyles(({ isDark }) => ({
        text: {
            color: adaptive ? (isDark ? 'white' : 'black') : 'black'
        }
    }))

    return <RNText style={[styles.text, style]}>
        {children}
    </RNText>
}

export default Text
