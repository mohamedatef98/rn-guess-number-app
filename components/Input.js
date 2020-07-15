import React from 'react'
import { TextInput } from 'react-native'

import { useStyles } from '../hooks'
import { Colors } from '../theme'

const Input = ({ style, ...rest }) => {
    const styles = useStyles(({ isDark }) => ({
        input: {
            marginVertical: 10,
            height: 30,
            borderColor: isDark ? Colors.whitish : Colors.greyish,
            borderBottomWidth: 1
        }
    }))

    return <TextInput style={[styles.input, style]} {...rest} />
}

export default Input
