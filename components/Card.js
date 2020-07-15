import React from 'react'
import { View } from 'react-native'

import { useStyles } from '../hooks'
import { Colors } from '../theme'

const Card = ({ children, style }) => {
    const styles = useStyles(({ isDark }) => ({
        card: {
            padding: 20,
            borderRadius: 10,
            borderColor: '#ccc',
            borderWidth: 1,
            backgroundColor: isDark ? Colors.greyish : Colors.whitish
        }
    }))

    return <View style={[styles.card, style]} >
        {children}
    </View >
}


export default Card
